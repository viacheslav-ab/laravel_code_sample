/**
 * Plan saga
 */

import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { Post_Request } from '../global/Request'

import {
    FETCH_MONTH_PLAN,
    SEND_WEEK_PLAN,
} from '../actions/types'

import {
    action_fetch_month_plan_success,
    action_fetch_month_plan_failure,
    action_send_week_plan_success,
    action_send_week_plan_failure
} from '../actions'

function* fetchMonthPlan({payload}) {
    try {
        const result = yield call(Post_Request, '/fetchmonthplan', payload)
        if (result.status === 1) {
            yield put(action_fetch_month_plan_success(result.data))        
        }
        else {
            yield put(action_fetch_month_plan_failure(result.msg))
        }
    } catch (err) {
        console.log("== fetch error ==", err);        
        yield put(action_fetch_month_plan_failure("Error happens!"))
    }
}

function* sendWeekPlan({payload}) {
    try {
        const result = yield call(Post_Request, '/sendWeekPlan', payload)
        console.log("=== sendWeekPlan result ===", result)
        if (result.status === 1) {
            yield put(action_send_week_plan_success("send success"))        
        }
        else {
            yield put(action_send_week_plan_failure(result.msg))
        }
    } catch (err) {
        yield put(action_send_week_plan_failure("Error happens. Try it later!"))
    }
}

export function* middle_fetchMonthPlan() {
    yield takeEvery(FETCH_MONTH_PLAN, fetchMonthPlan)
}

export function* middle_sendWeekPlan() {
    yield takeEvery(SEND_WEEK_PLAN, sendWeekPlan);
}

export default function* rootSaga() {
    yield all([
        fork(middle_fetchMonthPlan),
        fork(middle_sendWeekPlan)
    ])
}