import styled from "styled-components";

export const FooterContainer = styled.div`
    &>div{
        display:flex;
        flex-direction:column;
        align-items: flex-start;
        text-align: left;
        width: 300px;
        gap:20px;      
    }
    box-sizing: border-box;
    padding: 4% 10%;
    background:#fff;
    grid-template-columns: 350px repeat(4,150px) 350px;
    display:grid;
    justify-content:center;
    width:100%;
    height:300px;
    margin:auto;
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
        width: 123px; 
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