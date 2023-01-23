import styled from "styled-components";
import { Data1, Data2, HeaderImg1, HeaderImg2 } from "./data";

const ProductGalleryContainer = styled.div`
    display:grid;
    grid-template-columns: 25% 75%;
    align-items:center;
    height:300px;
    width:100%;
    border:1px solid #E3E8EE;
    border-radius: 6px;
    background: #fff;
    text-align:left;
    `
const ProductGalleryHeader = styled.div`
    box-sizing: border-box;  
    background-position: 0% 55%;    
    background-size: cover;
    background-repeat: no-repeat;
    height:100%;
    border-radius: 6px 0px 0px 6px;
    width:100%;
    text-align: left; 
`

const ProductGalleryHeaderTitle = styled.span` 
    font-size: 30px;
    font-weight: 600;
    width: 200px;
    top: 10%;
    left: 15%;
`
const ProductGalleryHeaderButton = styled.button`
    border:none;
    background: #fff; 
    height: 40px;
    width: 119px;
    bottom: 20%;
    left: 15%;
    font-size: 15px;
    border-radius: 6px;
    font-weight: 600;

`
const ProductGalleryImageContainers = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center; 
    justify-content: center;
`

const ProductGalleryImagesGroup = styled.div`
    display:grid;
    grid-template-columns: repeat(4,25%);
    height:50%;
    width:100%;
    align-items: center;
    justify-content: center;
`
const ProductGalleryCard = styled.div`
&:nth-of-type(4){
    border-width: 0px 0px  1px  0px;
}
    box-sizing: border-box;
    padding-bottom:20px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    gap:20px;
    height: 150px;
    width: 100%;
    border:1px solid #E3E8EE;
    border-width: 0px 1px  1px  0px;
    text-align: left;
`
const ProductGalleryCardImage = styled.img`
    height: 70px;
    width: 70px;
`

const ProductGalleryCardTitle = styled.span`
    font-weight: 600;
    font-size: 20px;
`

const ProductGalleryCardPrice = styled.span`
    color: darkgray;
    font-size: 13px;
    font-weight: 400;
    margin-top: 10px; 
`

const ProductCard = (props) => {

    return <ProductGalleryCard>
        <div style={{ display: 'flex', flexDirection: "column" }}>
            <ProductGalleryCardTitle children={props.name} />
            <ProductGalleryCardPrice>from<br />{"USD " + props.price}</ProductGalleryCardPrice>
        </div>
        <ProductGalleryCardImage src={props.img} />
    </ProductGalleryCard>
}



export const ProductGallery = (props) => {

    const data = props.group ? Data1 : Data2;
    const Img = props.group ? HeaderImg1 : HeaderImg2

    return <ProductGalleryContainer>
        <ProductGalleryHeader style={{
            backgroundImage: `url(${Img})`,
            transform: props.filter && 'scaleX(-1)',
            borderRadius: props.filter && '0px 6px 6px 0px',

        }} >
            <div style={{
                position: "relative",
                height: "100%",
                width: "100%",
                background: props.filter ? "#FFE8BA66" : "#FFFFFF4D",
                transform: props.filter && 'scaleX(-1)',
                borderRadius: props.filter ? '6px 0px 0px 6px' : '0px 6px 6px 0px',
            }}>
                <div style={{ position: "absolute", display: "flex", flexDirection: 'column', gap: "30px", left: "5%", top: "5%" }}>
                    <ProductGalleryHeaderTitle

                        children={props.header || "Home and outdoor"} />
                    <ProductGalleryHeaderButton
                        children={props.btnTitle || "Source now"} />
                </div>
            </div>

        </ProductGalleryHeader>
        <ProductGalleryImageContainers>
            <ProductGalleryImagesGroup>
                {data.slice(0, 4).map((item, index) => {
                    return <ProductCard key={index} {...item} />
                })}

            </ProductGalleryImagesGroup>
            <ProductGalleryImagesGroup>
                {data.slice(4, 8).map((item, index) => {
                    return <ProductCard key={index} {...item} />
                })}
            </ProductGalleryImagesGroup>
        </ProductGalleryImageContainers>
    </ProductGalleryContainer >
}