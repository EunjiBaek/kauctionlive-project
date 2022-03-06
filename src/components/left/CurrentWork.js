import styled from 'styled-components';

const List = styled.div`
    position: relative;
    padding-left: 145px;
    box-sizing: border-box;
`;

const ImgWrap = styled.div`
    position: absolute;
    top: 50%; left: 0;
    transform: translateY(-50%);
    width: 130px; height: 130px;
    overflow: hidden;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
`;

const TextWrap = styled.div`
    width: 100%;
    height: 130px;
    .lotNum {
        font-size: 13px;
        margin-bottom: 10px;
    }
    .writerName {
        font-weight: 600;
        font-size: 18px;
        line-height: 1.4em;
    }
    .subTitle {
        font-size: 13px;
        color: #9F9F9F;
        margin-bottom: 10px !important;
    }
    .unit {
        font-size: 14px;
        color: #666666
    }
    .size {
        font-size: 14px;
        color: #666666
    }
`;


const CurrentWork = ({ list, ...rest }) => {


    return (
        <List {...rest}>
            <ImgWrap>
                <img src={list.img_file_name}/>
            </ImgWrap>
            <TextWrap>
                <p className='lotNum'>LOT {list.lot_num}</p>
                <p className='writerName'>{list.a_name}</p>
                <p className='subTitle'>{list.w_name}</p>

                <p className='unit'>스크린프린트</p>
                <p className='size'>76.2×101.6cm (edition 91/100)</p>

            </TextWrap>
        </List>
    )
}

export default CurrentWork;