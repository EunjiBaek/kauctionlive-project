import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import {
    SearchOutlined,
    AimOutlined,
    DownCircleOutlined,
    DownCircleFilled
} from '@ant-design/icons';
import useInput from '../../hooks/useInput';



const SearchWrap = styled.div`
    padding: 0 15px 0 15px;
    border-bottom: 1px solid #eeeeee;
    overflow: hidden;
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
`;

const SearchContainer = styled.div`
    position: relative;
    border-radius: 5px;
    padding-right: 30px;
    height: 40px;
    overflow: hidden;
    background-color: #F1F1F1;

    input {
        width:100%;
        height: 100%;
        padding: 0 14px;
        box-sizing: border-box;
        background-color: transparent;
        border: none;
    }

    button {
        position: absolute;
        top: 50%; right: 12px;
        transform: translateY(-50%);   
    }
`;

const SearchIcon = styled(SearchOutlined)`
    font-size: 18px;
`;

const FilterWrap = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 0;

    > div {
        width: 50%;
        cursor: pointer;

        > span {
            padding-left: 5px; 
        }

        &.wishlist {
            text-align: right;
        }
    }
`;

const AimOutlineIcon = styled(AimOutlined)`
    font-size: 14px;
`;


const DownCircleOutlineIcon = styled(DownCircleOutlined)`
    font-size: 14px;
`;



const SearchInput = ({ onClick }) => {

    const [search, onSearch] = useInput('');
    const [checked, setChecked] = useState(false);

    const onChecked = useCallback(() => {
        setChecked((prev) => !prev);
    }, []);



    return (
        <SearchWrap>
            <SearchContainer>
                <input value={search} onChange={onSearch} type="text" placeholder="랏번호를 입력해주세요"/>
                <button>
                    <SearchIcon />
                </button>
            </SearchContainer>

            <FilterWrap>
                <div onClick={onClick}><AimOutlineIcon/><span>진행중인 LOT</span></div>

                <div className='wishlist' onClick={onChecked}>
                    {checked ?
                        <DownCircleFilled /> :
                        <DownCircleOutlineIcon />
                    }
                    <span>관심작품만</span>
                </div>
            </FilterWrap>
        </SearchWrap>
    )
};

export default SearchInput;