/**
 * Auth User Reducers
 */
import { NotificationManager } from 'react-notifications';
import {
    EDIT_WEEK_DATA,
    FETCH_MONTH_PLAN,
    FETCH_MONTH_PLAN_SUCCESS,
    FETCH_MONTH_PLAN_FAILURE,
    SEND_WEEK_PLAN,
    SEND_WEEK_PLAN_SUCCESS,
    SEND_WEEK_PLAN_FAILURE
} from '../actions/types';

/**
 * initialize
 */

const planDefaultData = [
    { nWeek: 1, nPrice: null, tPerform: null, tExecution: null, tExtra: null, nEditStatus: 0, nCheckStatus: 0 },
    { nWeek: 2, nPrice: null, tPerform: null, tExecution: null, tExtra: null, nEditStatus: 0, nCheckStatus: 0 },
    { nWeek: 3, nPrice: null, tPerform: null, tExecution: null, tExtra: null, nEditStatus: 0, nCheckStatus: 0 },
    { nWeek: 4, nPrice: null, tPerform: null, tExecution: null, tExtra: null, nEditStatus: 0, nCheckStatus: 0 },
    { nWeek: 5, nPrice: null, tPerform: null, tExecution: null, tExtra: null, nEditStatus: 0, nCheckStatus: 0 },
]

const INIT_STATE = {
    tableData: planDefaultData,
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case EDIT_WEEK_DATA:
            const { weekData } = action.payload;
            return { ...state, tableData: state.tableData.map(row => (row.nWeek === weekData.nWeek) ? weekData : row) }
        case FETCH_MONTH_PLAN:
            return { ...state, loading: true }

        case FETCH_MONTH_PLAN_SUCCESS:
            const { data } = action.payload;
            const tmp = planDefaultData.map((row, i) => (
                (data[i] && row.nWeek === data[i].nWeek) ? data[i] : row
            ))
            console.log("=== from reducer ==", tmp)
            return { ...state, loading: false, tableData: tmp }

        case FETCH_MONTH_PLAN_FAILURE:
            NotificationManager.error(action.payload)
            return { ...state, loading: false }

        case SEND_WEEK_PLAN:
            return { ...state, loading: true }

        case SEND_WEEK_PLAN_SUCCESS:
            NotificationManager.success(action.payload)
            return { ...state, loading: false }

        case SEND_WEEK_PLAN_FAILURE:
            NotificationManager.error(action.payload)
            return { ...state, loading: false }

        default: return { ...state };
    }
}
