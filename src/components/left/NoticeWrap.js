import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { NotificationOutlined } from '@ant-design/icons';
import NoticeList from './NoticeList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { noticeList } from '../../reducers/list';


const NotificationIcon = styled(NotificationOutlined)`
    color: #ffffff;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-size: 13px !important;
    font-weight: 900 !important;
`;

const Wrap = styled.div`
    margin-top: 15px;
    margin-bottom: 100px;
    border: 1px solid #eeeeee;
    
    .tit {
        box-sizing: border-box;
        padding: 0 22px;
        height: 46px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eeeeee;
        background-color: #ffffff;

        span {
            font-size: 15px;
            font-weight: 700;
        }

        .icon {
            position: relative;
            width: 22px; height: 22px;
            border-radius: 22px;
            background-color: #9E9E9E;
            margin-right: 8px;
        }
    }

`;

const NoticeListContainer = styled(NoticeList)`
    padding: 13px 26px;
    height: 104px;
    overflow-y: auto;
    box-sizing: border-box;
    background-color: #fafafa;
`;


const NoticeWrap =  () =>{

    const [isActive, setActive] = useState(true);

    const onClick = useCallback(() => {
        setActive((isActive) => !isActive);
    }, []);


    return (
        <Wrap>
            <div className='tit'>
                <div className='icon'>
                    <NotificationIcon />
                </div>
                <span>공지사항</span>
            </div>

            <NoticeListContainer />            
        </Wrap>
    )
}


export default NoticeWrap;