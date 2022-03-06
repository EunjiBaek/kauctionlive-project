import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';


const Wrap = styled.div`
    position: relative;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #eeeeee;
    background-color: #ffffff;
    border-radius: 5px;
    overflow:hidden;
    box-sizing: border-box;
    padding: 0 100px 0 15px;

    .content {
        box-sizing: border-box;
        font-size: 15px;
    }

    button {
        border:1px solid #0C77F4;
        border-radius: 5px;
        height: 30px;
        padding: 0 10px !important;
        color: #0C77F4;
        background-color: #ffffff;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 12px;
    }
`;



const AuctionTitle = () => {

    const { workShedule } = useSelector((state) => state.list);


    return (
        <Wrap>
            {workShedule &&
                <>
                <div className='content'>{workShedule.auc_title}</div>
                <button>
                    내 응찰 내역
                </button>
                </>
            }
        </Wrap>
    )
}



export default AuctionTitle;