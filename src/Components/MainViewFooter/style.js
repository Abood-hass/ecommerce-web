import styled from "styled-components";

export const FooterContainer = styled.div`
    &>div{
        display:flex;
        flex-direction:column;
        align-items: flex-start;
        text-align: left;
        max-width: 300px;
        gap:20px;  
    }
    box-sizing: border-box;
    padding: 50px 6% 0px 6%;
    background:#fff;
    grid-template-columns:repeat(6,auto);
    display:flex;
    justify-content:space-around;
    width:100%;
    height:300px;
    margin:auto;
    gap:60px;
`


export const FooterBrandGroup = styled.div` 
    &>span{ 
        font-size: 16px;
        font-weight: 400; 
        text-align: left;
        color:#505050;
    }
`


export const FooterBrandSoicalMedia = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    gap:12px;
    &>img{
        border-radius:50%;
        height:22px;
        width:22px;
        padding:8px;
        background:#BBBCBE;
        margin:auto;
    }
`


export const FooterLinksGroup = styled.div`
        width:fit-content;
    &>span{ 
        font-size: 16px;
        font-weight: 400; 
        text-align: left;
        color:#8B96A5;
    }
    &>span:nth-of-type(1){
        font-weight: 500; 
        color:#000;
        margin-bottom:10px;
    }
    &>img{  
        height: 42px;
    }
`

export const FooterCopyRightBar = styled.div`
    &>span{
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        color: #606060;
    }
    &>div{
        display:flex;
        align-items:center;
        gap:5px;
    }
    &>div>select{
        border:none;
        background:#0000;
        &>opstion{
            margin-left:10px;
        }
       
    }
     &>div>img{
            width:20px;
        }
    display:flex;
    justify-content:space-between;
    align-items;
    box-sizing:border-box;
    padding: 20px 128px;
    height: 68px;
    background: #EFF2F4;
`