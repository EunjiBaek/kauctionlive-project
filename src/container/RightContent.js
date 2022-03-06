import styled from 'styled-components';
import MyBid from "../components/right/MyBid";
import CurrentBidListWrap from '../components/right/CurrentBidListWrap';
import CurrentPrice from '../components/right/CurrentPrice';



const Wrap = styled.div`
    height: auto;
    background-color: #Ffffff;
    overflow: hidden;
`;


const RightContent = ({...rest}) => {
    return (
        <>
        <Wrap {...rest}>
            <MyBid />
            <CurrentBidListWrap/>

            <CurrentPrice />
        </Wrap>
        </>
    )
}



export default RightContent;