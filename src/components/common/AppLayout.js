import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Responsive from "./Responsive";
import Header from './Header';


const FooterWrap = styled.div`
    height: 90px;
    background-color: #eeeeee;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 12px;
    color: #666666;
`;


const AppLayout = ({ children }) => {

    return (

    
        <div>
            {/* header */}
            <Header />

            <div>
                {children}
            </div>

            {/* footer */}
            <FooterWrap>
                Copyright ⓒ K Auction. All Rights Reserved
            </FooterWrap>

        </div>
    )

}


AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
  }


export default AppLayout;


