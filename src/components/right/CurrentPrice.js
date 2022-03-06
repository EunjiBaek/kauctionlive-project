import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { WORK_BID_REQUEST } from '../../reducers/list';
import "react-toastify/dist/ReactToastify.css";



const CurrentPriceWrap = styled.div`
    margin-top: 15px;
    height: 153px;
    display flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    padding: 13px;
    box-sizing: border-box;

    .tit {
        position:relative;
        width: 100%;
        font-size: 16px;
        margin-bottom: 10px;
        box-sizing: border-box;
        padding-right: 200px;

        > span {
            position:absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            font-size: 18px;
            font-weight: 700;
        }
    }

    .price {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 25px !important;
    }

    button {
        width: 100%; height: 82px;
        font-size: 18px;
        color: #ffffff;
        background-color: #333333;
        display flex;
        align-items: center;
        justify-content: center; 
        flex-direction: column;
        border-radius: 5px;


        p {
            font-size: 16px;
            margin-bottom: 5px;
        }
    }
`;


const CurrentPrice = () => {



    const { me } = useSelector(state => state.user);
    const { workCurrentSelect, workBidError, workBidDone } = useSelector(state => state.list);
    const dispatch = useDispatch();
    const currentInfo = workCurrentSelect[0];
    const bounce = cssTransition({
        enter: "animate__animated animate__bounceIn",
    });

    const options = {
        position: "bottom-center",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        pauseOnFocusLoss: false,
        onClose: useCallback(() => {
            // setReset(counter => counter + 1);
        }, [])
        
    };


    useEffect(() => {
        if (workBidError) {            
            toast.warn(workBidError, options);
            return;
        }

        if (!workBidError && workBidDone === true) {
            toast.success("응찰성공", options);
            return;
        }


    }, [workBidError]);



    const onBidRequest = useCallback(() => {

        dispatch({
            type: WORK_BID_REQUEST,
            data: {
                "auc_kind": currentInfo.auc_kind,
                "auc_num": currentInfo.auc_num,
                "lot_num": currentInfo.lot_num,
                "paddle_num": currentInfo.paddle_num,
                "bid_type_cd": currentInfo.bid_type_cd,
                "bid_stat_cd": currentInfo.bid_stat_cd,
                "bid_price": currentInfo.bid_price
            }
        });

    }, []);


    
    return (
        <>
        {workCurrentSelect.map((work) => (
            <CurrentPriceWrap key={work.auc_num}>
                <p className='tit'>현재가 <span>KRW {work.bid_price}</span></p>
              
                <button onClick={onBidRequest}>
                    <p>KRW {work.bid_price}</p>
                    응찰하기
                </button>
            </CurrentPriceWrap>  
        ))}
        <ToastContainer />
        </>
    )
}

export default CurrentPrice;