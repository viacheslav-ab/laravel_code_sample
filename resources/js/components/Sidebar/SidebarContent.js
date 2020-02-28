/**
 * Sidebar Content
 */
import React, { Component, Fragment } from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import IntlMessages from 'Util/IntlMessages';

import NavMenuItem from './NavMenuItem';

// redux actions
import { onToggleMenu } from 'Actions';

class SidebarContent extends Component {

    toggleMenu(menu, stateCategory) {
        let data = {
            menu,
            stateCategory
        }
        this.props.onToggleMenu(data);
    }

    render() {
        const { sidebarMenus } = this.props.sidebar;
        const { roll } = this.props
        return (
            <div className="rct-sidebar-nav">
                <nav className="navigation">
                    <List
                        className="rct-mainMenu p-0 m-0 list-unstyled"
                    >
                        {sidebarMenus.category1.map((menu, key) => (
                            roll === "user" ? (
                                menu.path === "/dashboard/plan" ?
                                    <NavMenuItem
                                        menu={menu}
                                        key={key}
                                        onToggleMenu={() => this.toggleMenu(menu, 'category1')}
                                    />
                                    :
                                    null
                            )
                                :
                                <NavMenuItem
                                    menu={menu}
                                    key={key}
                                    onToggleMenu={() => this.toggleMenu(menu, 'category1')}
                                />
                        ))}
                    </List>
                </nav>
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ authUser, sidebar }) => {
    const { roll } = authUser
    return { roll, sidebar };
};

export default withRouter(connect(mapStateToProps, {
    onToggleMenu
})(SidebarContent));
