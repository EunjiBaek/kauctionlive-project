import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { createGlobalStyle } from "styled-components";
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import Responsive from "./Responsive";
import logo from '../../public_assets/img/logo.svg';
import liveIcon from '../../public_assets/img/live_icon.svg';
import liveIcon_01 from '../../public_assets/img/PropertyWaiting.png';




const GlobalStyle = createGlobalStyle`
    a {
        color: #000000;
    }
    .ant-dropdown-link {
        width: 45px;
        color: #666666;
        box-sizing: border-box;
        margin-right: 10px;
    }
    .anticon-down {
        margin-left: 4px;
    }
    .ant-dropdown-menu-item {
        font-size: 12px;
    }
`;

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">KOR</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">ENG</a>
      </Menu.Item>
    </Menu>
  );


const BlockWrap = styled(Responsive)`
    position: relative;
    height: 70px;
    h1 {
        position: absolute;
        top: 50%; left: 20px;
        transform: translateY(-50%);
        font-size: 15px;
        font-weight: 700;
        display: flex;
        align-items:center;


        > img {
            &.logo {
                margin-right: 10px;
            }
            &.live_icon {
                margin-left: 10px;
            }
        }


    }

`;

const HeaderWrap = styled.div`
    border-bottom: 1px solid #eeeeee;
    background-color: #ffffff;
`;


const UserWrap = styled.div`
    position: absolute;
    top: 50%; right: 20px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #666666;
    > p {
        margin-right: 25px;

        span {
            padding-left: 5px;
            color: #E1232E;
        }
    }

    > button {
        height: 24px;
        padding: 0 12px;
        border: 1px solid #eeeeee;
        border-radius: 5px;

        a {
            font-size: 12px;
            color: #666666;
        }
    }
`;


const Header = () => {

    const { me } = useSelector((state) => state.user);
    const { workShedule } = useSelector((state) => state.list);

 
    return (
        <>
            <GlobalStyle />
            <HeaderWrap>
                <BlockWrap>

                    <h1>
                        <img className='logo' src={logo} alt='케이옥션 로고'></img>
                        {workShedule && workShedule.auc_title}
                        {
                            !workShedule.auc_stat_cd === "E"
                            ? <img src={liveIcon} className='live_icon' alt='라이브경매 아이콘'></img>   
                            : <img src={liveIcon_01} className='live_icon' alt='라이브경매 아이콘'></img>  
                        }
                        
                    </h1>   
    

                    <UserWrap>

                        {me ?
                        <p>내패들 번호<span>#641</span></p> :
                        <p>GUEST</p> }
                        
                        
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            KOR <DownOutlined />
                            </a>
                        </Dropdown>

                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            KRW <DownOutlined />
                            </a>
                        </Dropdown>
                        <button>
                            {me ?
                            <Link to="/login">로그아웃</Link>
                            : <Link to="/login">로그인</Link>
                            }
                        </button>
                    </UserWrap>
                </BlockWrap>
            </HeaderWrap>
        </>
    )
    

}


export default Header;
