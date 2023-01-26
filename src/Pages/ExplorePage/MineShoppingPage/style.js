import styled from "styled-components";

export const MainShoppingContainer = styled.div`
    button{
        cursor:pointer;
    }
    background: #F6FaFd;
    width: 100%;
    margin:auto;
    &>div{
        width:88%;
        margin:auto;
    }
`

export const MainShoppingContainerBody = styled.div`
    display:flex;
    flex-direction: column;
    algin-items: center;
    justify-content: space-evenly; 
    width: 85vw;
    margin: auto;
    margin-top: 10px;
    height:fit-content;
    gap: 30px;
    padding-bottom: 50px;
`
