import styled from "styled-components";
import LogoImg from '../../Assest/Images/main-logo-64.png'

export const LogoContainer = styled.div`
    user-select:none;
    display: flex;
    align-items: center; 
    gap:10px;
`

export const LogoImgContainer = styled.img.attrs(_ => ({
    src: LogoImg,
}))` 
    height: 30px;
    object-fit: container;
    filter: drop-shadow(5px 0px 1px rgba(13,110,253,0.48));
`
export const LogoName = styled.span`
    font-size: 20px;
    font-weight:700;
    color:rgba(13,110,253,0.48); 
`
