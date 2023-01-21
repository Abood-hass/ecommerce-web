import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import Inter from './Assest/Fonts/Inter.ttf'

export const AppStyled = styled.div`
background-color: #DADADA;
`;
export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url(${Inter}) format('ttf');
    }
`;