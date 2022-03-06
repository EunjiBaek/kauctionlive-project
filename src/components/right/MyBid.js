import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const Wrap = styled.div`
    position: relative;
    height: 85px;
    padding: 14px 14px 14px 74px;
    box-sizing: border-box;
    background-color: #ffffff;
    border: 1px solid #eeeeee;
    box-sizing: border-box;
    display: felx;
    align-items: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    > .lot_num {
        position: absolute;
        left: 15px; top: 50%;
        transform: translateY(-50%);
        width: 44px; height: 44px;
        border-radius: 44px;
        background-color: #071839;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    > .content {
        width: 100%;
        .writer_info {
            width: 100%;
            font-size: 14px;
            font-weight: 700;
            span{
                padding-left: 10px;
                color: #9f9f9f;
                font-weight: 400;
            }
        }

        .price {
            margin-top: 5px;
            font-size: 12px;
        }
    }

`;

const MyBid = () => {

    const { workLists, workSelect } = useSelector(state => state.list);
    

    // 진행중인 랏 리스트에서 랏넘버가 같은 객체를 필터링
    const currentWork = workLists.filter((v) => v.lot_num === workSelect.lot_num);


    return (
        <>
            {currentWork.map((list) => (
            <Wrap key={list.lot_num}>
                <div className='lot_num'>{list.lot_num}</div>

                <div className='content'>
                    <p className='writer_info'>{list.a_name}<span>{list.w_name}</span></p>
                    <p className='price'>KRW {list.w_low_price} ~ {list.w_high_price}</p>
                </div>
            </Wrap>
            ))}
        </>
    )
}

export default MyBid;