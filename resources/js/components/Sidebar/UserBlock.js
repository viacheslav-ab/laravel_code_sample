/**
 * User Block Component
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Badge } from 'reactstrap';
import { NotificationManager } from 'react-notifications';

// components
import SupportPage from '../Support/Support';

// redux action
import { action_logout_user } from 'Actions';

// intl messages
import IntlMessages from 'Util/IntlMessages';

class UserBlock extends Component {

	state = {
		userDropdownMenu: false,
		isSupportModal: false
	}

	componentDidMount() {
		// Here can do connect to sever and fetch user data
	}

	/**
	 * Logout User
	 */
	logoutUser(e) {
		e.preventDefault();
		// this.props.LOGOUT_USER();
		this.setState({ userDropdownMenu: false });
		const { user } = this.props.authUser;
		const { action_logout_user, history } = this.props;
		action_logout_user({ user }, history);
	}

	goToProfile(e) {
		e.preventDefault();

		this.setState({ userDropdownMenu: false });
		const { history } = this.props;
		history.push('/dashboard/profile');
	}

	/**
	 * Toggle User Dropdown Menu
	 */
	toggleUserDropdownMenu() {
		this.setState({ userDropdownMenu: !this.state.userDropdownMenu });
	}

	/**
	 * Open Support Modal
	 */
	openSupportModal() {
		this.setState({ isSupportModal: true });
	}

	/**
	 * On Close Support Page
	 */
	onCloseSupportPage() {
		this.setState({ isSupportModal: false });
	}

	/**
	 * On Submit Support Page
	 */
	onSubmitSupport() {
		this.setState({ isSupportModal: false });
		NotificationManager.success('Message has been sent successfully!');
	}

	render() {
		const { name, email, imgUrl } = this.props.authUser;
		return (
			<div className="top-sidebar">
				<div className="sidebar-user-block">
					<Dropdown
						isOpen={this.state.userDropdownMenu}
						toggle={() => this.toggleUserDropdownMenu()}
						className="rct-dropdown"
					>
						<DropdownToggle
							tag="div"
							className="d-flex align-items-center"
						>
							<div className="user-profile">
								{imgUrl ?
									<img
										src={imgUrl}
										// onError={function}
										alt="user profile"
										className="img-fluid rounded-circle"
										style={{ width: 50, height: 50 }}
									/>
									:
									<i className="zmdi zmdi-account-circle zmdi-hc-3x"></i>
								}
							</div>
							<div className="user-info">
								<span className="user-name ml-4">{name}</span>
								<i className="zmdi zmdi-chevron-down dropdown-icon mx-4"></i>
							</div>
						</DropdownToggle>
						<DropdownMenu>
							<ul className="list-unstyled mb-0">
								<li className="p-15 border-bottom user-profile-top bg-primary rounded-top">
									<p className="text-white mb-0 fs-14">{name}</p>
									<span className="text-white fs-14">{email}</span>
								</li>
								<li>
									{/* <Link to={{
										pathname: '/dashboard/profile',
										// state: { activeTab: 0 }
									}}> */}
									<a href="#" onClick={(e) => this.goToProfile(e)}>
										<i className="zmdi zmdi-account text-primary mr-3"></i>
										<span><IntlMessages id="widgets.profile" /></span>
									</a>
									{/* </Link> */}
								</li>
								<li className="border-top">
									<a href="#" onClick={(e) => this.logoutUser(e)}>
										<i className="zmdi zmdi-power text-danger mr-3"></i>
										<span><IntlMessages id="widgets.logOut" /></span>
									</a>
								</li>
							</ul>
						</DropdownMenu>
					</Dropdown>
				</div>
				<SupportPage
					isOpen={this.state.isSupportModal}
					onCloseSupportPage={() => this.onCloseSupportPage()}
					onSubmit={() => this.onSubmitSupport()}
				/>
			</div>
		);
	}
}

// map state to props
const mapStateToProps = ({ authUser, settings }) => {
	return { authUser, settings };
}

export default connect(mapStateToProps, {
	action_logout_user
})(withRouter(UserBlock));
