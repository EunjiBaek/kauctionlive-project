import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppLayout from "../components/common/AppLayout";
import styled from 'styled-components';
import Responsive from "../components/common/Responsive";
import BidList from "../container/BidList";
import { UnorderedListOutlined } from '@ant-design/icons';
import LeftContent from '../container/LeftContent';
import RightContent from '../container/RightContent';
import { LOAD_SCHEDULE_REQUEST } from '../reducers/list';


const BlockWrap = styled(Responsive)`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 15px;
`;


const BidListWrap = styled(BidList)`
    position: fixed;
    top: 0; left: 0px;
    transition: all 0.3s ease; 

    &.on {
        left: 0px !important;
    }
`;

const ListOnBtn = styled.button`
    position: fixed;
    top: 50%; left: 0;
    width: 65px;
    height: 56px;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #F1F1F1;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 22px;
    z-index: 10;
`;


const ListOnBackground = styled.div`
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: transparent;
    z-index: 1;
`;



const LandingPage = () => {

    const [isActive, setActive] = useState('-360px');
    const [backgroundOpened, setBackgroundOpened] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: LOAD_SCHEDULE_REQUEST,
            data: {
                "auc_kind": 1, "auc_num": 129
            }
        });
    }, []);


    const onClickEvent = useCallback(() => {
        setActive((isActive) => !isActive);
        setBackgroundOpened((prev) => !prev);
    }, []);



    return (
        <> 
        <AppLayout>
            {/* "-360px" : "0px" */}
            <BidListWrap style={{left: isActive ? "-360px" : "0px"}} onhandleToggle={onClickEvent}/>
            {backgroundOpened &&
                <ListOnBackground onClick={onClickEvent}/>
            }
            <ListOnBtn onClick={onClickEvent}>
                <UnorderedListOutlined />
            </ListOnBtn>

            <BlockWrap>
                <LeftContent style={{width: "63%"}} />
                <RightContent style={{width: "35%"}} />
            </BlockWrap>

        </AppLayout>
        
        </>
    )
}


export default LandingPage;

