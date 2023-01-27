import styled from "styled-components";

export const ProductViewContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap: 20px;
    background: #F6FaFd;
    width: 100%;
    margin:auto;
    &>div{
        width:88%;
        margin:auto;
    }
`

export const ProductViewDetailedOption = styled.div`
    display:grid;
    grid-template-columns: 80% auto;
    gap: 20px;
    &>div{
        box-sizing:border-box;
        border: 1px solid #E3E8EE; 
        box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
        border-radius: 6px;
        background: #Fff;
        margin-bottom:20px;
    }
`

export const MayYouLike = styled.div`
    display:flex;
    flex-direction:column;
    height: fit-content;
    gap: 10px;
    box-sizing:border-box;
    padding: 20px;
     &>span{
        font-weight: 500;
        margin-bottom: 10px;
        font-size: 18px;
     }
`


export const MayYouLikeItem = styled.div`
cursor:pointer;
    display:flex; 
    width:100%;
    height:fit-content;
    gap:10px;
    box-sizing:border-box; 
    &>img{
        box-sizing:border-box;
        width: 70px;
        height: 70px;
        padding:10px;
        border: 1px solid #E0E0E0;
        border-radius: 6px;
    }
    &>div{
       font-weight: 400;
       margin-bottom: 10px;
       font-size: 16px;
       &>div{
           &>span:before{
               content:"$";
           }
           color: #8B96A5;
       }
    }
`