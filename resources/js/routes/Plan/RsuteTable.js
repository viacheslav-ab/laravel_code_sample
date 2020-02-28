
import React, { useState, useRef, useEffect } from 'react';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
// intl messages
import IntlMessages from 'Util/IntlMessages';
// Rsuite table
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/lib/less/index.less';

import IconButton from '@material-ui/core/IconButton';
import { Button } from 'reactstrap';

// MonthPicer
import MonthPicker from 'react-month-picker'
import 'react-month-picker/css/month-picker.css'

import ConfirmationDialog from './PlanDialog'

// redux
import { connect } from 'react-redux'

import {
    action_edit_week_data,
    action_fetch_month_plan,
    action_send_week_plan
} from '../../actions'

const styles = {
    display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #aaa"
}

const pickerLang = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Apl', 'Sep', 'Oct', 'Nov', 'Dec'],
    from: 'From', to: 'To'
}
const yearRange = { min: 2010, max: 2050 }
let defaultYearMonth = { year: 2020, month: 1 }
let mrange = { from: { year: 2014, month: 8 }, to: { year: 2025, month: 5 } }

const makePickerText = m => {
    if (m && m.year && m.month) return (m.year + "Year" + "\t" + pickerLang.months[m.month - 1])
    return '?'
}

const getCurrentDate = () => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return { year: year, month: month }
}

function RsuiteTable({ match, user, tableData, loading, ...rest }) {

    //===== Month Picker ====//
    const pickAMonth = useRef(null)
    const [yearMonth, setYearMonth] = useState(getCurrentDate())
    // const [isPickerShow, setIsPickerShow] = useState(false)

    //== modal ===//
    const [bOpenModal, setBOpenModal] = useState(false)
    const [rowData, setRowData] = useState({})

    //====== fetch data ===//
    useEffect(() => {
        console.log("=== useEffect ===")
        //== connect server ===//
        const { action_fetch_month_plan } = rest;
        action_fetch_month_plan({ ...getCurrentDate(), idToken: user });
    }, [])

    //== handle Month Picker ===?

    const onClickMonthPicker = () => {
        pickAMonth.current.show()
    }

    const onChangePicker = (value, text) => {
        // setIsPickerShow(true)
        console.log("==== onchangePicker ===", value, text)
        setYearMonth({ year: value, month: text })
        //== connect server ===//
        const { action_fetch_month_plan } = rest;
        action_fetch_month_plan({ year: value, month: text, idToken: user });
    }

    const onDismissPicker = (value) => {
        // setIsPickerShow(false)
        console.log("==== onDissmiss Picker ===")
        //== connect server ===//
        // const {action_fetch_month_plan} = rest;
        // action_fetch_month_plan({...value, idToken: user});
    }

    //=== handle modal ===//
    const onCloseModal = (weekData, bModified) => {
        setBOpenModal(false)

        if (!bModified) return

        const { action_edit_week_data } = rest;
        action_edit_week_data(weekData);
    }

    return (
        <div className="dialog-wrapper">
            <PageTitleBar title={<IntlMessages id="sidebar.plan" />} match={match} />
            <RctCollapsibleCard>
                <MonthPicker
                    ref={pickAMonth}
                    years={yearRange}
                    // range={mrange}
                    // show={isPickerShow == true ? true : false}
                    lang={pickerLang.months}
                    value={yearMonth}
                    onChange={onChangePicker}
                    onDismiss={onDismissPicker}
                >
                    <Button onClick={onClickMonthPicker} className="mr-10 mb-10" outline color="primary">
                        <i className="zmdi zmdi-calendar-note"> {makePickerText(yearMonth)}</i>
                    </Button>
                </MonthPicker>
                <Table
                    bordered
                    cellBordered
                    // height={420}
                    autoHeight={true}
                    headerHeight={80}
                    data={tableData}
                    onRowClick={data => {
                        // console.log(data);
                    }}
                    // rowExpandedHeight = {100}
                    wordWrap={true}
                    style={{ maxWidth: "100%", minWidth: "50%", zIndex: 0, borderRight: "1px solid #aaa", borderBottom: "1px solid #aaa" }}
                >
                    <Column width={70} fixed>
                        <HeaderCell style={{ ...styles }}>Weekly</HeaderCell>
                        <Cell dataKey="nWeek" style={{ ...styles }} />
                    </Column>

                    <Column flexGrow={1} colSpan={2}>
                        <HeaderCell style={{ padding: "0px" }}>
                            <div align="center" style={{ ...styles, height: "40px" }}>Content</div>
                            <div className="header-cell-group-subtitle" style={{ height: "40px", display: "flex" }}>
                                <div align="center" style={{ ...styles, flex: 1, border: "0px", borderLeft: "1px solid #aaa", borderRight: "1px solid #aaa" }}>Price</div>
                                <div align="center" style={{ ...styles, flex: 3, border: "0px solid #ddd", borderLeft: "0px solid #aaa" }}>Method</div>
                            </div>
                        </HeaderCell>
                        <Cell dataKey="nPrice" style={{ ...styles }} >
                            {row => {
                                return (
                                    <div>{row.nPrice || ""}</div>
                                )
                            }}
                        </Cell>
                    </Column>

                    <Column flexGrow={3}>
                        <HeaderCell style={{ ...styles }} />
                        <Cell dataKey="tPerform" align="left" style={{ ...styles }}  >
                            {row => {
                                return (
                                    <div>{row.tPerform || ""}</div>
                                )
                            }}
                        </Cell>
                    </Column>

                    <Column flexGrow={1}>
                        <HeaderCell style={{ ...styles }}>Performance</HeaderCell>
                        <Cell dataKey="tExecution" align="left" style={{ ...styles }} />
                    </Column>

                    <Column flexGrow={1}>
                        <HeaderCell style={{ ...styles }}>Other</HeaderCell>
                        <Cell dataKey="tExtra" align="left" style={{ ...styles }} />
                    </Column>
                    <Column fixed width={160}>
                        <HeaderCell style={{ ...styles }}>Action</HeaderCell>
                        <Cell style={{ ...styles }} >
                            {row => {
                                function handleEdit() {
                                    setRowData(row)
                                    setBOpenModal(true)
                                }
                                function handleSend() {
                                    const { action_send_week_plan } = rest;
                                    console.log("=== send ===", { ...row, idToken: user, year: yearMonth.year, month: yearMonth.month })
                                    action_send_week_plan({ ...row, idToken: user, year: yearMonth.year, month: yearMonth.month })
                                }
                                return (
                                    <div style={{ display: "flex" }}>
                                        <div style={{ ...styles, flex: 1, border: 0 }}>
                                            <IconButton
                                                color="primary"
                                                size={"small"}
                                                onClick={handleEdit}>
                                                <i className="zmdi zmdi-border-color"> Edit</i>
                                            </IconButton>

                                        </div>
                                        <div style={{ ...styles, flex: 1, border: 0 }}>
                                            <IconButton
                                                color="primary"
                                                size={"small"}
                                                disabled={row.nEditStatus == 0 || row.nCheckStatus == 2 ? true : false}
                                                onClick={handleSend} >
                                                Send<i className="zmdi zmdi-mail-send"></i>
                                            </IconButton>
                                        </div>
                                    </div>
                                );
                            }}
                        </Cell>
                    </Column>
                </Table>
                <ConfirmationDialog
                    open={bOpenModal}
                    onClose={onCloseModal}
                    rowData={rowData}
                    yearMonth={yearMonth}
                />
            </RctCollapsibleCard>
        </div>
    )
}

// map state to props
const mapStateToProps = ({ authUser, planTable }) => {
    const { user } = authUser;
    const { tableData, loading } = planTable;
    return { user, tableData, loading }
}

export default connect(mapStateToProps, {
    action_edit_week_data,
    action_fetch_month_plan,
    action_send_week_plan
})(RsuiteTable);