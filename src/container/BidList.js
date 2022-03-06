import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_LISTS_REQUEST } from '../reducers/list';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WriterList from '../components/workList/WriterList';
import SearchInput from '../components/workList/SearchInput';
import {
    CloseOutlined
} from '@ant-design/icons';

const ListWrap = styled.div`
    width: 350px; height: 100%;
    border-right: 1px solid #eeeeee;
    background-color: #ffffff;
    box-sizing: border-box;
    z-index: 11;

    .close_btn {
        position: absolute;
        top: 12px; right: 14px;
        cursor: pointer;
    }
`;

const CloseIcon = styled(CloseOutlined)`
    font-size: 16px;
    color: #666666;
    font-weight: 700;
`


const WriterListWrap = styled.div`
    padding-top: 126px;
    box-sizing: border-box;
    height: 100%;

    > div {
        height: 100%;
        overflow-y: scroll;
    }
`;



const BidList = ({ onhandleToggle, ...rest}) => {



    const { workLists, workSelect } = useSelector(state => state.list);
    const [isActive, setActive] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_LISTS_REQUEST,
            data: {
                "auc_kind":1,
                "auc_num":139,
            }      
        });
    }, []);
    

    const onClick = useCallback(() => {
        setActive((prev) => !prev)
    }, []);

    return (

        <ListWrap {...rest}>
            <button className='close_btn' onClick={onhandleToggle}>
                <CloseIcon />
            </button>
            <SearchInput onClick={onClick}/>

            <WriterListWrap>
                <div>
                    {workLists && workLists.map((list) => (
                        <WriterList key={list.lot_num} list={list} style={{border: list.lot_num === workSelect.lot_num &&  isActive ? "2px solid #ff0000" : "0px"}}/>
                    ))}
                </div>
            </WriterListWrap>

        </ListWrap>

    )
}


export default BidList;
