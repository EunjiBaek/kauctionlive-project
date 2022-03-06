import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import '../index.css';
import AuctionTitle from '../components/left/AuctionTitle';
import Video from '../components/left/Video';
import CurrentAuction from '../components/left/CurrentAuction';
import NoticeWrap from '../components/left/NoticeWrap';



const LeftContent = ({ ...rest}) => {
    
    
    return (

        <div {...rest}>
            <AuctionTitle />
            <Video />
            <CurrentAuction />
            <NoticeWrap />
        </div>
    )
}



export default LeftContent;