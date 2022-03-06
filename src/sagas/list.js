import axios from 'axios';
import shortId from 'shortid';
import { all, call, delay, fork, put, takeLatest, throttle } from 'redux-saga/effects';

import {
    LOAD_NOTICE_REQUEST,
    LOAD_NOTICE_SUCCESS,
    LOAD_NOTICE_FAILURE,
    LOAD_LISTS_REQUEST,
    LOAD_LISTS_SUCCESS,
    LOAD_LISTS_FAILURE,
    LOAD_WORKSELECT_REQUEST,
    LOAD_WORKSELECT_SUCCESS,
    LOAD_WORKSELECT_FAILURE,
    WORK_BID_REQUEST,
    WORK_BID_SUCCESS,
    WORK_BID_FAILURE,
    LOAD_SCHEDULE_REQUEST, LOAD_SCHEDULE_SUCCESS, 
    LOAD_SCHEDULE_FAILURE,
} from '../reducers/list';
import dummy from '../db/data.json';




// loadNotice
function loadNoticeAPI() {
    return axios.post('/api/Live/usp_Live_Auc_Notice_Info_Select', {});
}

function* loadNotice(action) {
    try {
        // const result = yield call(loadNoticeAPI, action.data);
        const result = [
            {
                "noti_seq": 12,
                "noti_sort_num": 3,
                "noti_memo": "응찰 버튼을 누르면 바로 시스템에 반영되어 취소가 불가능합니다. ",
                "noti_reg_date": "2020-09-23T14:42:49.683",
                "noti_mod_date": "2020-11-25T15:48:55.763"
            },
            {
                "noti_seq": 4,
                "noti_sort_num": 4,
                "noti_memo": "경매 영상 및 소리는 시간차가 있으므로 응찰하기 버튼을 참고 바랍니다.",
                "noti_reg_date": "2020-09-18T12:11:23.677",
                "noti_mod_date": "2020-09-24T17:40:08.773"
            },
            {
                "noti_seq": 7,
                "noti_sort_num": 5,
                "noti_memo": "LOT 53, 71, 101,218, 222는 사정에 의해 취소되었습니다. ",
                "noti_reg_date": "2020-09-18T12:12:10.58",
                "noti_mod_date": "2021-07-23T15:58:46.897"
            }
        ]

        yield put({
            type: LOAD_NOTICE_SUCCESS,
            // data: result.data.data.Table
            data: result
        });

    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_NOTICE_FAILURE,
            error: err,
        });
    }
}



// 진행중인 랏 리스트 조회
function loadListsAPI(data) {
    // 리스트 조회 
    // { 
    //     "auc_kind":1, "auc_num":129 
    // } 
    return axios.post('/api/Live/usp_Live_auction_schedule_Select', data);
}

// 진행중인 랏 리스트 조회
function* loadLists(action) {
    try {
        // const result = yield call(loadListsAPI, action.data);
        const result = dummy.Table2;

        yield put({
            type: LOAD_LISTS_SUCCESS,
            // data: result.data.data.Table2,
            data: result
        });

    } catch (error) {
        console.error(error);
        yield put({
            type: LOAD_LISTS_FAILURE,
            error: error.response.data,
        });
    }
}

// 응찰등록
function workBidAPI(data) {
    // 리스트 조회 
    return axios.post(' /api/Live/usp_Live_Auc_Bidding_Hst_InsertProc', data);
}


function* workBid(action) {
    try {
        // const result = yield call(workBidAPI, action.data);

        const result = {
            "data": {
                "resultCd": "00",
                "resultMsg": "성공",
                "data": {
                    "Table": [
                        {
                            "code": "99",
                            "msg": "ERR_LOT_NOTALLOW",
                            "bid_price": 21000000,
                            "lot_num": 1,
                            "reg_date": "2022-02-14 10:49:55"
                        }
                    ]
                }
            },
            "status": 200,
            "statusText": "OK",
            "headers": {
                "access-control-allow-headers": "*",
                "access-control-allow-methods": "*",
                "access-control-allow-origin": "*",
                "connection": "close",
                "content-type": "application/json; charset=utf-8",
                "date": "Mon, 14 Feb 2022 01:49:55 GMT",
                "server": "",
                "transfer-encoding": "chunked",
                "vary": "Accept-Encoding",
                "x-content-encoding-over-network": "br, gzip",
                "x-powered-by": "Express"
            },
            "config": {
                "transitional": {
                    "silentJSONParsing": true,
                    "forcedJSONParsing": true,
                    "clarifyTimeoutError": false
                },
                "transformRequest": [
                    null
                ],
                "transformResponse": [
                    null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1,
                "maxBodyLength": -1,
                "headers": {
                    "Accept": "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                },
                "method": "post",
                "url": " /api/Live/usp_Live_Auc_Bidding_Hst_InsertProc",
                "data": "{\"auc_kind\":1,\"auc_num\":129,\"lot_num\":1,\"paddle_num\":600,\"bid_type_cd\":\"ONL\",\"bid_stat_cd\":\"CNL\",\"bid_price\":21000000}"
            },
            "request": {}
        }

        //API 호출 성공여부
        if(result.data.resultCd !== "00")
            throw result.data.resultMsg;        
            
        //데이터 정합성 성공여부
        if(result.data.data.Table[0].code !== '00')
            throw result.data.data.Table[0].msg;
            
        yield put({
            type: WORK_BID_SUCCESS,
            data: result.data
        });

    } catch (err) { 
        
        //console.log(err)
        yield put({
            type: WORK_BID_FAILURE,
            error: err
        });
    }
}


// 진행중인 옥션 스케줄 조회
function loadScheduleAPI(data) {
    // 보내는데이터
    // {
    //     "auc_kind":1, "auc_num":129
    // }    
    return axios.post('/api/Live/usp_Live_auction_schedule_Select', data);
}

// 진행중인 옥션 스케줄 조회
function* loadSchedule(action) {
    try {
        // const result = yield call(loadScheduleAPI, action.data);
        
        const result = {
            "auc_kind": "1",
            "auc_num": 129,
            "auc_title": "2020년 7월 15일 메이저 경매",
            "auc_date": "2020년 7월 15일(수) 오후 4:00",
            "auc_place": "신사동 케이옥션 전시장 및 경매장",
            "auc_start_date": "2020-07-03T16:00:00",
            "auc_end_date": "2020-07-15T16:00:00",
            "my_paddle_num": 0,
            "my_bid_type": 0,
            "auc_stat_cd": "E"
        }

        yield put({
            type: LOAD_SCHEDULE_SUCCESS,
            // data: result.data.data.Table[0]
            data: result
        });

    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_SCHEDULE_FAILURE,
               error: err,
        });
    }
}

// 현재진행중인 lot 조회 api
function loadWorkSelectAPI(data) {
    // 보내는 데이터
    // { 
    //     "auc_kind":1, "auc_num":129 
    // } 
    return axios.post('/api/Live/usp_Live_Auc_LotStat_Info_SelectForWAITORING', data);
}

// 현재진행중인 lot 조회
function* loadWorkSelect(action) {
    try {
        // const result = yield call(loadWorkSelectAPI, action.data);
        const result = {
            "Table": [
                {
                    "call_date": "2022-02-14T10:46:53.813",
                    "lot_row_num": 5,
                    "lot_total_cnt": 131,
                    "auc_kind": 1,
                    "auc_num": 139,
                    "lot_num": 5,
                    "lot_stat_cd": "S",
                    "mod_date": "2022-02-10T11:06:40.363",
                    "auc_stat_cd": "S",
                    "auc_date": "2022-01-19T16:00:00",
                    "auc_date_diff": -2227613,
                    "bid_price_resv": 10000000,
                    "bid_increase_price": 200000,
                    "pre_bid_price": 25100000,
                    "pre_bid_cnt": 2,
                    "successful_bid": true,
                    "successful_bid_price": 0,
                    "successful_paddle_num": 0,
                    "bid_hst_seq": 0,
                    "bid_reg_date": "2022-02-14T10:46:53.813",
                    "bid_reg_date_diff": 344413,
                    "org_bid_price": 0,
                    "bid_price": 10000000,
                    "usd_bid_price": 8992,
                    "jpy_bid_price": 968935,
                    "cny_bid_price": 56947,
                    "hkd_bid_price": 68376,
                    "eur_bid_price": 7471,
                    "next_bid_price": 10000000,
                    "usd_next_bid_price": 8992,
                    "jpy_next_bid_price": 968935,
                    "cny_next_bid_price": 56947,
                    "hkd_next_bid_price": 68376,
                    "eur_next_bid_price": 7471,
                    "claim_bid_hst_seq": null,
                    "bid_noti_seq": null,
                    "pre_bid_proc_yn": false,
                    "is_fair_warning": false
                }
            ],
            "Table1": []
        }

        yield put({
            type: LOAD_WORKSELECT_SUCCESS,
            // data: result.data.data,
            data: result
        });

    } catch (err) {
        console.error(err);
        yield put({
        type: LOAD_WORKSELECT_FAILURE,
            error: err,
        });
    }
}



// 공지사항 목록 조회
function* watchLoadNotice() {
    yield takeLatest(LOAD_NOTICE_REQUEST, loadNotice);
}

// 진행중인 옥션 스케줄 조회
function* watchAucSchedule() {
    yield takeLatest(LOAD_SCHEDULE_REQUEST, loadSchedule);
}
// 진행중인 랏 리스트
function* watchLoadLists() {
    yield takeLatest(LOAD_LISTS_REQUEST, loadLists);
}
// 현재진행중인 lot 조회
function* watchloadWorkSelect() {
    yield takeLatest(LOAD_WORKSELECT_REQUEST, loadWorkSelect);
}

function* watchWorkBid() {
    yield takeLatest(WORK_BID_REQUEST, workBid);
}



export default function* listSaga() {
    yield all([
        fork(watchLoadLists),
        fork(watchLoadNotice),
        fork(watchloadWorkSelect),
        fork(watchWorkBid),
        fork(watchAucSchedule),
    ]);
}
  