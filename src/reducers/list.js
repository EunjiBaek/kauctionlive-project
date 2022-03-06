import { produce } from 'immer';
import { createRequest } from './createRequest';
import shortId from 'shortid';
import dummy from '../db/data.json';

export const initialState = {
    workLists: [], // 진행중인 랏 리스트
    workShedule: [], // 진행중인 옥션 스케줄 정보
    workSelect: [], // 현재진행중인 랏정보
    workCurrentSelect: [{      
        "bid_hst_seq": 13197,
        "auc_kind": 1,
        "auc_num": 129,
        "lot_num": 1,
        "paddle_num": 600,
        "bid_price": 21000000.00,
        "bid_type_cd": "ONL",
        "bid_stat_cd": "CNL",
        "bid_reg_date": "2021-12-01T21:01:46.253",
        "bid_chg_reason_memo": "MNG",
        "bid_chg_date": "2021-12-02T11:41:47.05",
        "bid_noti_memo": ""
    }], 
    noticeLists: [], // 공지사항
    BidList: [], // 응찰등록
    hasMorelists: true,
    loadListsLoading: false,
    loadListsDone: false,
    loadListsError: null,
    loadWorkSelectLoading: false,
    loadWorkSelectDone: false,
    loadWorkSelectError: null,
    loadBidSelectForTopLoading: false,
    loadBidSelectForTopDone: false,
    loadBidSelectForTopError: null,
    loadScheduleLoading: false,
    loadScheduleDone: false,
    loadScheduleError: null,
    workBidLoading: false,
    workBidDone: false,
    workBidError: null,
}


export const noticeList = [
    {"id": 1,
    "content": "응찰 버튼을 누르면 바로 시스템에 반영되어 취소가 불가능합니다."},
    {"id": 2,
    "content": "경매 영상 및 소리는 시간차가 있으므로 응찰하기 버튼을 참고 바랍니다"},
    {"id": 3,
    "content": "LOT 67, LOT 202는 사정에 의해 취소 되었습니다."},
    {"id": 4,
    "content": "LOT 67, LOT 202는 사정에 의해 취소 되었습니다."}
]


export const dummyBidList = (data) => ({
    "Table": [
        {
        "code": "00",
        "msg": "SUCC",
        "bid_price": 15000000.00,
        "lot_num": 16,
        "reg_date": "2020-12-28 19:42:10"
        }
    ]     
});


export const dummyBidSelectForTopPrice = (data) => ({
    "bid_hst_seq": 0,
    "bid_reg_date": "2020-12-28T19:29:08.933",
    "lot_num": 1,
    "pre_bid_price": 850000000,
    "bid_increase_price": 2000000,
    "bid_price_resv": 900000000,
    "bid_price": 900000000,
    "usd_bid_price": 0,
    "jpy_bid_price": 0,
    "cny_bid_price": 0,
    "hkd_bid_price": 0,
    "eur_bid_price": 0,
    "bid_type_cd": " ",
    "paddle_num": 0,
    "top_yn": "Y",
    "auc_stat_cd": "S",
    "lot_stat_cd": "F"
});



// 공지사항 목록 조회
export const [LOAD_NOTICE_REQUEST, LOAD_NOTICE_SUCCESS, LOAD_NOTICE_FAILURE] = createRequest('LOAD_NOTICE');

// 진행중인 옥션 스케줄 조회
export const [LOAD_SCHEDULE_REQUEST, LOAD_SCHEDULE_SUCCESS, LOAD_SCHEDULE_FAILURE] = createRequest('LOAD_SCHEDULE');

// 진행중인 랏 리스트 조회
export const [LOAD_LISTS_REQUEST, LOAD_LISTS_SUCCESS, LOAD_LISTS_FAILURE] = createRequest('LOAD_LISTS');

// 현재 랏 정보 조회
export const [LOAD_WORKSELECT_REQUEST, LOAD_WORKSELECT_SUCCESS, LOAD_WORKSELECT_FAILURE] = createRequest('LOAD_WORKSELECT');

// 현재 응찰 작품 조회
export const [LOAD_BIDSELECTFORTOP_REQUEST, LOAD_BIDSELECTFORTOP_SUCCESS, LOAD_BIDSELECTFORTOP_FAILURE] = createRequest('LOAD_BIDSELECTFORTOP');

// 현재 응찰가 조회
export const [LOAD_CURRENT_PRICE_REQUEST, LOAD_CURRENT_PRICE_SUCCESS, LOAD_CURRENT_PRICE_FAILURE] = createRequest('LOAD_CURRENT_PRICE');

// 응찰 성공
export const [WORK_BID_REQUEST, WORK_BID_SUCCESS, WORK_BID_FAILURE] = createRequest('WORK_BID');



const reducer = (state = initialState, action) => produce(state, (draft) => {

    
    switch (action.type) {
        // LOAD_SCHEDULE_REQUEST
        case LOAD_NOTICE_REQUEST:
            draft.loadNoticeLoading = true;
            draft.loadNoticeDone = false;
            draft.loadNoticeError = null;
            break;
        case LOAD_NOTICE_SUCCESS:
            draft.loadNoticeLoading = false;
            draft.noticeLists = action.data;
            break;
        case LOAD_NOTICE_FAILURE:
            draft.loadNoticeLoading = false;
            draft.loadNoticeError = action.error;
            break;
        case LOAD_SCHEDULE_REQUEST:
            draft.loadScheduleLoading = true;
            draft.loadScheduleDone = false;
            draft.loadScheduleError = null;
            break;
        case LOAD_SCHEDULE_SUCCESS:
            draft.loadScheduleLoading = false;
            draft.workShedule = action.data;
            break;
        case LOAD_SCHEDULE_FAILURE:
            draft.loadScheduleLoading = false;
            draft.loadScheduleError = action.error;
            break;
        case LOAD_LISTS_REQUEST:
            draft.loadListsLoading = true;
            draft.loadListsDone = false;
            draft.loadListsError = null;
            break;
        case LOAD_LISTS_SUCCESS:
            draft.loadListsLoading = false;
            draft.workLists = action.data;
            break;
        case LOAD_LISTS_FAILURE:
            draft.loadListsLoading = false;
            draft.loadListsError = action.error;
            break;
        case LOAD_BIDSELECTFORTOP_REQUEST:
            draft.loadBidSelectForTopLoading = true;
            draft.loadBidSelectForTopDone = false;
            draft.loadBidSelectForTopError = null;
            break;
        case LOAD_BIDSELECTFORTOP_SUCCESS:
            draft.loadBidSelectForTopLoading = false;
            draft.loadBidSelectForTopDone = true;
            break;
        case LOAD_BIDSELECTFORTOP_FAILURE:
            draft.loadBidSelectForTopLoading = false;
            draft.loadBidSelectForTopError = action.error;
            break;
        case LOAD_WORKSELECT_REQUEST:
            draft.loadWorkSelectLoading = true;
            draft.loadWorkSelectDone = false;
            draft.loadWorkSelectError = null;
            break;
        case LOAD_WORKSELECT_SUCCESS:
            draft.loadWorkSelectLoading = false;
            draft.workSelect = action.data.Table[0];
            // draft.workCurrentSelect.concat(action.data.Table1);
            draft.loadWorkSelectDone = true;
            break;
        case LOAD_WORKSELECT_FAILURE:
            draft.loadWorkSelectLoading = false;
            draft.loadWorkSelectError = action.error;
            break;
        case WORK_BID_REQUEST:
            draft.workBidLoading = true;
            draft.workBidDone = false;
            draft.workBidError = null;
            break;
        case WORK_BID_SUCCESS:
            draft.workBidLoading = false;
            draft.BidList.unshift(action.data);
            draft.workBidDone = true;
            break;
        case WORK_BID_FAILURE:
            draft.workBidLoading = false;
            draft.workBidError = action.error;
            break;
        default:
            break;
    }
});


export default reducer;