import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ListWrap = styled.div`
    box-sizing: border-box;
    height: 70px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid #eeeeee;
    > p {
        font-size: 11px;
        color: #666666;
        margin-bottom: 3px;
    }
    .content {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        display: flex;
        align-items: center;

        span {
            font-size: 14px;
        }

        strong {
            font-size: 15px;
            color: #E02020;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
        }
    }
`;


const CurrentBidList = ({bidlist, ...rest}) => {
    return (
        <>
            <ListWrap {...rest} key={bidlist.index}>
                <p>11:05:46</p>
                <div className='content'>
                    <span>현장응찰</span>
                    <strong>KRW {bidlist.data.Table[0].bid_price}</strong>
                </div>
            </ListWrap>
        </>

    )
}

export default CurrentBidList;