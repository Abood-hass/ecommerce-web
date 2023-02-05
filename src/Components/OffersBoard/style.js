import styled from "styled-components";

export const OfferBoardContainer = styled.div`
    display:grid;
    grid-template-columns: 25% 15% 15% 15% 15% 15%;
    align-items:center;
    height:240px;
    width:100%;
    border-radius: 6px;
    border:1px solid #E3E8EE;
    background: #fff;
`

export const OfferBoardCounterContainer = styled.div`
    box-sizing: border-box;
    padding: 30px 20px;
    display:flex; 
    flex-direction:column;
    align-items:left;
    height:100%;
    width:100%;
    
`
export const OfferBoardTitle = styled.p`  
    font-size: 30px;
    font-weight: 600; 
    text-align: left;
    margin:0px;
    @media (max-width: 1050px){
        font-size: 20px;
    }
`

export const OfferBoardBody = styled.p`
    font-size: 25px;
    font-weight: 300; 
    margin:0px;
    @media (max-width: 1050px){
        font-size: 15px;
    }
`
export const OfferBoardCounter = styled.div`
    box-sizing: border-box;
    padding: 20px;
    display:flex;
    height:90px;
    width:90%;
    gap: 10px;
 `
export const OfferBoardCounterItems = styled.div` 
    align-items: center;
    text-align: center;
    color:white;
    padding: 3px;
    flex-direction:column;
    display:flex;
    background: #606060;
    border-radius: 4px;
    width: 40px;
    height: 100%;
    gap:5px;
 `
export const OfferBoardCounterText = styled.span`
    &:before{
        content: <br/>;
    }
    font-size: 12px;
    font-weight: 300;
 

`
export const OfferBoardCounterNum = styled.span` 

    font-size: 18px;
    font-weight: 400;
    `

export const OfferBoardCounterItemsContainer = ({ label, val }) => {
    return <OfferBoardCounterItems >
        <OfferBoardCounterNum children={Math.floor(val) || 0} />
        <OfferBoardCounterText children={label || "Sec"} />
    </OfferBoardCounterItems>
}
