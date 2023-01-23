import styled from "styled-components";
import Bakground from '../../Assest/Images/ContactUsImg.png'
import { LightBlue } from "../ColorSchema";

export const ContactUsContainer = styled.div`
    position: relative;
    height: 500px;
    width: 100%;
    border-radius: 6px;
    background-image: url(${Bakground});
    transform: scaleX(-1);
`

export const ContactUsContainerFilter = styled.div`
    position: absolute;
    position: relative;
    min-height: 100%;
    min-width: 100%;
    border-radius: 6px;
    background: linear-gradient(94.99deg, #2C7CF1 7.19%, rgba(0, 209, 255, 0.5) 89.49%);
    transform: scaleX(-1);
`
export const ContactUsText = styled.div`
    box-sizing: border-box;
    padding:5%;
    color: #fff;
    font-size:34px;
    font-weight:600;
    height:130px; 
    width: 500px;
`

const ContactUsBoxContainer = styled.div`
    height: 400px;
    width: 500px;
    position: absolute;
    background: #fff;
    top: 10%;
    left: 3%;
    transform: scaleX(-1);
    border-radius: 6px;
    box-sizing: border-box;
    padding: 30px 50px;
    display:flex;
    flex-direction: column;
    gap: 20px;
`

const ContactUsBoxHeader = styled.span`
    font-size: 30px; 
    font-weight: 600;
    text-align: left;
`
const ContactUsBoxItemName = styled.input.attrs(_ => ({ placeholder: "What item you need?" }))`
    box-sizing: border-box;
    border: 1px solid #E3E8EE;
    padding: 0px 10px;
    font-size: 18px;
    border-radius: 6px;
    height:40px;
`
const ContactUsBoxItemDetails = styled.textarea.attrs(_ => ({ placeholder: "Type more details" }))`
    height:80px;
    box-sizing: border-box;
    padding: 5px 10px;
    font-size: 18px;
    border-radius: 6px;
    border: 1px solid #E3E8EE;
    resize: none;
`
const ContactUsBoxItemQuantity = styled.input.attrs(_ => ({ type: "number", placeholder: "Quantity" }))`
 box-sizing: border-box;
    border: 1px solid #E3E8EE;
    padding: 0px 10px;
    font-size: 18px;
    width: 60%;
    border-radius: 6px;
    height:40px;
    `
const ContactUsBoxItemQuantityContainer = styled.div`
    display:flex;
    aligen-items: center;
    gap:10px;
`
const ContactUsBoxItemQuantityType = styled.select`
    font-size: 18px;
    border-radius: 6px;
    border: 1px solid #E3E8EE;
    font-color: #E3E8EE;
`


const ContactUsBoxItemButton = styled.button`
    border:none; 
    background:${LightBlue};
    width: 35%;
    height:40px;
    border-radius: 6px;
    font-size: 18px;
    color:#fff;
`


export const ContactUsBox = () => {
    return <ContactUsBoxContainer>
        <ContactUsBoxHeader children="Send quote to suppliers" />
        <ContactUsBoxItemName />
        <ContactUsBoxItemDetails />
        <ContactUsBoxItemQuantityContainer>
            <ContactUsBoxItemQuantity min={0} />
            <ContactUsBoxItemQuantityType>
                <option value={"pec"}>pec</option>
                <option value={"package"}>package</option>
            </ContactUsBoxItemQuantityType>
        </ContactUsBoxItemQuantityContainer>
        <ContactUsBoxItemButton children="Send inquiry" />
    </ContactUsBoxContainer>
}