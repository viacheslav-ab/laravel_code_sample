/**
 * Plan Table Actions
 */

import {
    EDIT_WEEK_DATA,
    FETCH_MONTH_PLAN,
    FETCH_MONTH_PLAN_SUCCESS,
    FETCH_MONTH_PLAN_FAILURE,
    SEND_WEEK_PLAN,
    SEND_WEEK_PLAN_SUCCESS,
    SEND_WEEK_PLAN_FAILURE
} from './types'

export const action_edit_week_data = (weekData) => ({
    type: EDIT_WEEK_DATA,
    payload: { weekData }
})

export const action_fetch_month_plan = (params) => ({
    type: FETCH_MONTH_PLAN,
    payload: params
});

export const action_fetch_month_plan_success = (data) => ({
    type: FETCH_MONTH_PLAN_SUCCESS,
    payload: { data }
})

export const action_fetch_month_plan_failure = (err) => ({
    type: FETCH_MONTH_PLAN_FAILURE,
    payload: err
})

export const action_send_week_plan = (params) => ({
    type: SEND_WEEK_PLAN,
    payload: params
})

export const action_send_week_plan_success = (data) => ({
    type: SEND_WEEK_PLAN_SUCCESS,
    payload: data
})

export const action_send_week_plan_failure = (err) => ({
    type: SEND_WEEK_PLAN_FAILURE,
    payload: err
})