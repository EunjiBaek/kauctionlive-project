import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { noticeList, LOAD_NOTICE_REQUEST } from '../../reducers/list';
 
const List = styled.div`
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 15px;
    margin-bottom: 8px;

    &:last-child {
        margin-bottom: 0;
    }

    span {
        position: absolute;
        top: 0; left: 0;
        display: inline-block;
        font-size: 18px;
        width: 10px; height: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        color: #666666;
    }

    p {
        color: #666666;
    }
`;


const NoticeList = ({...rest}) => {

    const dispatch = useDispatch();
    const { noticeLists } = useSelector((state) => state.list);

    useEffect(() => {
        dispatch({
            type: LOAD_NOTICE_REQUEST,
        });
    }, []);


    return (
        <div {...rest}>

            {noticeLists.map((list) => (
                <List key={list.noti_sort_num}>
                    <span>·</span>
                    <p>{list.noti_memo}</p>
                </List>
            ))}
        </div>
    )
}


export default NoticeList;