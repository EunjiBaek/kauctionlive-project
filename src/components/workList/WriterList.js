import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
    HeartOutlined,
    SelectOutlined
} from '@ant-design/icons';

const ListWrap = styled.div`
    background-color: #f9f9f9;
`;

const List = styled.div`
    position: relative;
    padding: 15px 15px 15px 115px;
    border-bottom: 1px solid #eeeeee;
    box-sizing: border-box;

    &.on {
        border: 1px solid #FF0000;
    }
`;

const ImgWrap = styled.div`
    position: absolute;
    top: 50%; left: 15px;
    transform: translateY(-50%);
    width: 85px; height: 85px;
    overflow: hidden !important;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TextWrap = styled.div`
    height: 85px;
    .lotNum {
        font-size: 12px;
        line-height: 1.4em;
    }
    .writerName {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.4em;
    }
    .subTitle {
        color: #9F9F9F;
    }
    .price {
        color: #666666;
    }
`;

const HoverItem = styled.div`
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.2);
    display: none;
    align-items: center;
    justify-content: center;

    > button {
        padding: 0 24px;
        height: 30px;
        background-color: #fefefe;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:first-child {
            margin-right: 5px;
        }
    }
`;


const Select = styled(SelectOutlined)`
    padding-left: 3px;
`;
const Heart = styled(HeartOutlined)`
    padding-left: 3px;
`;



const WriterList = ({ list, ...rest }) => {

    const divRef = useRef(null);
    const { workSelect } = useSelector(state => state.list);
    const hoverEvnet = (e) => {
        e.preventDefault();
       
    };




    return (
         
        <ListWrap {...rest} >

            <List ref={divRef}>
                <ImgWrap style={{overflow:"hidden"}}>
                    <img src={list.img_file_name}/>
                </ImgWrap>
                <TextWrap>              
                    <p className='lotNum'>{list.lot_num}</p>
                    <p className='writerName'>{list.a_name}</p>
                    <p className='subTitle'>{list.w_name}</p>
                    <p className='price'>{list.w_low_price} ~ {list.w_high_price}</p>
                </TextWrap>

                <HoverItem>
                    <button>관심추가<Heart/></button>
                    <button>작품정보<Select /></button>
                </HoverItem>
            </List>


        </ListWrap>

    )
}

export default WriterList;