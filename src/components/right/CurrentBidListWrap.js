import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CurrentBidList from '../left/CurrentBidList';


const Wrap = styled.div`
    box-sizing: border-box;
    padding: 0 12px 35px 12px;
    height: 511px;
    overflow-y: auto;
    background-color: #f9f9f9;
    border-left: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;


const CurrentBidListWrap = () => {

    const { BidList } = useSelector(state => state.list);

    return (

        <Wrap>
            {BidList && BidList.map((bidlist) => (
                <CurrentBidList bidlist={bidlist}/>
            ))}            
        </Wrap>

    )
}

export default CurrentBidListWrap;