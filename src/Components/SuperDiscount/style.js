import styled from "styled-components";

export const SuperDiscountContainer = styled.div`
    position:relative;
    padding:20px;
    border-radius:6px;
    background:#005ADE;
    color:#fff;
    height: 100px;
    overflow:hidden;
`

export const SuperDiscountTrapezoid = styled.div`
    position:absolute;
    border-bottom: 160px solid #237CFF ;
	border-left: 0px solid transparent;
	border-right: 35px solid transparent; 
	width: 60%;
    left:0%;
    top:0%;
    border-radius:6px 6px 0px 0px;
`



export const SuperDiscountTextContainer = styled.div`
    position:absolute;
    display:flex;
    padding:20px;
    justify-content:space-between;
    align-items:center;
    height: 120px;
    width:162%;
    box-sizing: border-box;
    margin auto 0px;
    &>div>p:nth-of-type(1){
        font-weight: 600;
        font-size: 24px;
        margin-bottom:0px;
    }
     &>div>p:nth-of-type(2){ 
        font-weight: 300;
        font-size: 16px;
    }
`