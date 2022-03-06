import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_WORKSELECT_REQUEST } from '../../reducers/list';
import styled from 'styled-components';
import CurrentWork from './CurrentWork';
import {
    LoadingOutlined,
} from '@ant-design/icons';



const Wrap = styled.div`
    width: 100%;
    height: 170px;
    background-color: #ffffff;
    display flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
    margin-top: 25px;
    border-radius: 5px;
    border: 1px solid #eeeeee;
`;

const Loading = styled.div`
    width: 100%; height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoadingAnimation = styled(LoadingOutlined)`
    font-size: 30px;
    font-weight: 900;
    color: #071839;
`;


const CurrentAuction = () => {

    const { workLists, workSelect, loadListsLoading } = useSelector(state => state.list);
    const dispatch = useDispatch();
    

    // 진행중인 랏 리스트에서 랏넘버가 같은 객체를 필터링
    const currentWork = workLists.filter((v) => v.lot_num === workSelect.lot_num);

  

    // 현재 랏 정보 조회 액션
    useEffect(() => {
        dispatch({
            type: LOAD_WORKSELECT_REQUEST,
            data: {
                "auc_kind": 1,
                "auc_num": 139
            }
        });
    }, []);



    return (
        <Wrap>
            {loadListsLoading 
               ? 
                <Loading>
                    <LoadingAnimation />
                </Loading>
               :
               <>
               {currentWork.map((list) => (
                    <CurrentWork key={list.lot_num} list={list} />
                ))}
                </>
            }


        </Wrap>
    )
}

export default CurrentAuction;