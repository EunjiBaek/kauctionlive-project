import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

html, body{
    background-color: #ffffff;
} 

/* 여백 초기화 */
body,div,ul,li,dl,dd,dt,ol,h1,h2,h3,h4,h5,h6,input,fieldset,legend,p,select,table,th,td,tr,textarea,button,form,figure,figcaption{margin:0; padding:0; font-size: 13px; line-height: 1.2em; font-weight: 400;}

/* 폰트 초기화 */
body, input, textarea, select, button, table {font-family: 'Noto Sans KR', 'Malgun Gothic','맑은 고딕',dotum,'돋움', sans-serif; color: #000000; font-size: 13px; line-height: 1.2em; font-weight: 400;}

p {
    font-size: 13px;
    line-height: 1.2em;
}


a {
    color: #000000;
    text-decoration:none;
    background-color: transparent;
}
a:active,
a:hover {
    color: #000000;
    outline: 0;
}


ul,ol,li{
    list-style:none
}
fieldset,img{
    border:0
}
/* 제목 태그 초기화 */
h1,h2,h3,h4,h5,h6 {font-size: 13px; font-weight: normal;}

/* 폰트크기 자동조절 제거 */
input::-ms-clear, input::-ms-reveal{
    display:none
} /* IE - select arrow remove */
img{
    border:0;
    vertical-align:top;
    -webkit-touch-callout:none
} /* 이미지 터치 팝업 제거 */

article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{
    display:block
}
textarea,button,input,select{
    appearance:none;
    -webkit-appearance:none;
    -moz-appearance:none;
    border-radius:0;
}

/* IE의 경우 */
input::-ms-clear,
input::-ms-reveal{
    display:none;
}
input:focus { outline: none; }
/* 크롬의 경우 */
input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration{
    display:none;
}
input::placeholder {
    color: #888888;
}

/* IE10 이상에서 input box 에 추가된 지우기 버튼 제거 */
input::-ms-clear { display: none; }

button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
button:focus,
button:active {
    padding: 0;
}
button, span{
    position: relative;
}
select::-ms-expand{
    display:none
}
table{
    border-collapse:collapse;
    border-spacing:0
}
label{
    cursor:pointer
}

/* IE 에서 Select box 화살표 제거 */ 
select::-ms-expand { display: none; }


div::-webkit-scrollbar {
    -webkit-appearance: none;
}
/* 스크롤바 뒷 배경 설정*/
div::-webkit-scrollbar-track{
    background-color: #f9f9f9;
    padding: 0 5px;
}

div::-webkit-scrollbar:vertical {
    width: 14px;
}
div::-webkit-scrollbar:horizontal {
    height: 14px;
}
div::-webkit-scrollbar-thumb {
    border-radius: 15px;
    border: 4px solid #fafafa;
    background-color: #cccccc;
}

.on {
    left: 0px;
}



@keyframes pulse {	
    50% { 
        background: #ffffff;
    } 
}

/* IR 효과 */
.ir_pm {display:block; overflow:hidden; font-size:0; line-height:0; text-indent:-9999px;} /* 의미있는 이미지의 대체 텍스트를 제공하는 경우(Phark Method) */
.ir_wa {display:block; overflow:hidden; position:relative; z-index:-1; width:100%; height: 100%;} /* 의미있는 이미지의 대체 텍스트로 이미지가 없어도 대체 텍스트를 보여주고자 할 때(WA IR) */
.ir_so {overflow: hidden; position:absolute; width:0; height:0; line-height:0; text-indent:-9999px;} /* 대체 텍스트가 아닌 접근성을 위한 숨김 텍스트를 제공할 때 */
`;


export default GlobalStyle;