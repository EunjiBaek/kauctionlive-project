import styled from "styled-components";


/* 브라우저 크기에 따라 가로 크기 변경 */
const ResponsiveBlock = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    width: 1024px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        width: 950px;
    }
`;



const Responsive = ({ children, ...rest }) => {
    // style, className, onClick, onMouseMove등의 props를 사용할수 있도록
    // ...rest를 사용하여 ResponsiveBlock에게 전달

    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>

}

export default Responsive;
