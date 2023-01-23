import styled from "styled-components";

export const ExtraServicesContainer = styled.div`
    display:flex;
    flex-direction:column;
`
export const ExtraServicesHeader = styled.span.attrs(_ => ({ children: "Our extra servicess" }))`
    font-weight: 600;
    font-size: 24px;
`
export const ExtraServicesGroup = styled.div`
    margin: 30px -35px;
    display:grid;
    grid-template-columns: repeat(4,auto); 
`

export const ExtraServicesView = (props) => {
    return <ExtraServicesContainer>
        <ExtraServicesHeader />
        <ExtraServicesGroup>
            {props.children}
        </ExtraServicesGroup>
    </ExtraServicesContainer>
}


export const ExtraServicesItemContainer = styled.div`
    position:relative;
    display:flex;
    flex-direction: column;
    background: #fff;
    border: 1px solid #E0E0E0;
    border-radius: 6px;
    width:280px;
    height:200px;
    margin:auto;
    &>img{
        border-radius: 6px 6px 0px 0px;
        width:100%;
        height:60%;
        object-fit:cover;
        object-position: 0% 37%;
        filter: brightness(0.7);
    }
    &>span{ 
        height:40%; 
        box-sizing:border-box;
        padding: 20px 30px;
        font-weight:500;
    }
`

export const ExtraServicesItemIcon = styled.div`

    position:absolute;
    border-radius: 50%;
    background:#D1E7FF;
    border: 1px solid #fff;
    bottom:60px;
    right:20px;
    height:40px; 
    width:40px;
    z-index:9;
    &:hover{
        &>img{  
        height:25px; 
        width:25px; 
        bottom: 8px;
        right: 8px;
    }
    }
    &>img{ 
        transition:all 200ms;
        position:absolute; 
        bottom: 10px;
        right: 10px;
        height:20px; 
        width:20px; 
    }
`
export const ExtraServicesItem = (props) => {
    return <ExtraServicesItemContainer>
        <ExtraServicesItemIcon>
            <img src={props.icon} alt="" />
        </ExtraServicesItemIcon>
        <img src={props.img} alt="" />
        <span>{props.title}</span>
    </ExtraServicesItemContainer>
}