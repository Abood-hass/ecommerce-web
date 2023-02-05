import styled from "styled-components";

export const SuppliersListContainer = styled.div` 
    width: 100%;
`

export const SuppliersListHeader = styled.span.attrs(_ => ({ children: "Suppliers by region" }))`  
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    height: 120px;
    width: 100%;
`
export const SuppliersListGroup = styled.div`
    display:grid;
    grid-template-columns: repeat(5,auto);
    row-gap: 20px;
    margin: 30px -10px;
    height: fit-content;
    width: 100%;
    @media (max-width: 1200px){
    grid-template-columns: repeat(3,auto);
    }
    @media (max-width: 700px){
    grid-template-columns: repeat(2,auto);
    }
`

export const SuppliersListItem = styled.div`
    display:grid;
    grid-template-columns: 40px 150px; 
    align-items: center;
    justify-content:center;
    gap: 20px; 
    text-align: left;
    &>img{
        height: 30px;
        width: 38px;
    }
     &>div{
        display:flex;
        flex-direction: column;  
    }
`

export const SuppliersListCounty = styled.span` 
    font-size: 20px;
    font-weight: 400;
`

export const SuppliersListSupplier = styled.span` 
    font-size: 14px;
    font-weight: 400;
    color:#8B96A5;
`


export const SuppliersListGroupBox = ({ children }) => {
    return <SuppliersListContainer>
        <SuppliersListHeader />
        <SuppliersListGroup>
            {children}
        </SuppliersListGroup>
    </SuppliersListContainer>
}

export const SuppliersListBox = (props) => {
    return <SuppliersListItem>
        <img src={props.countryFlag} alt="" />
        <div>
            <SuppliersListCounty children={props.country} />
            <SuppliersListSupplier children={props.supplierName} />
        </div>
    </SuppliersListItem>
}
