import styled from "styled-components";

const OfferCardContainer = styled.div`
    cursor:pointer;
    display:flex;
    flex-direction:column;
    align-items:center; 
    box-sizing: border-box;
    padding: 10px 20px;
    width:100%;
    border:1px solid #E3E8EE;
    border-width: 0px 0px 0px 1px;
`
const OfferCardImage = styled.img`
    height:140px;
    width:100px;
    object-fit:contain;
    @media (max-width: 1050px){
        height:80px;
        width:60px;
    }
`

const OfferCardOfferValue = styled.span` 
&:before{
    content:"-";
}
&:after{
    content:"%";
}
    font-size: 14px;
    font-weight: 500;
    width: 50px;
    text-align:center;
    color:#EB001B;
    padding: 5px 6px;
    font-size: 18;
    background: #FFE3E3;
    border-radius: 18px;
    @media (max-width: 1050px){
        font-size: 10px;
    }
`

export const OfferCard = ({ src, productName, offer, onClick }) => {
    return <OfferCardContainer onClick={onClick}>
        <OfferCardImage src={src} />
        <p>{productName}</p>
        <OfferCardOfferValue children={offer} />
    </OfferCardContainer>
}