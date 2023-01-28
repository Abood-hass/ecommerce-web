import React from 'react'
import ProductPath from '../../../Components/ProductPath'
import ProductViewBasicsInfo from '../../../Components/ProductViewBasicsInfo'
import ProductInfoTab from '../../../Components/ProductInfoTab'
import RelatedProducts from '../../../Components/RelatedProducts'
import SuperDiscount from '../../../Components/SuperDiscount'
import { MayYouLike, MayYouLikeItem, ProductViewContainer, ProductViewDetailedOption } from './style'
import { RecommendedItems } from './data'


export default function index() {


    return (
        <ProductViewContainer>
            <ProductPath path={["Technology", "Smart Phones", "Ipohnes",]} />
            <ProductViewBasicsInfo />
            <ProductViewDetailedOption>
                <div style={{ padding: " 20px 0px" }}>
                    <ProductInfoTab />
                </div>
                <MayYouLike>
                    <span children={"You may like"} />
                    {RecommendedItems.slice(0, 5)?.map(item => <MayYouLikeItem>
                        <img src={item.img} alt="" />
                        <div>
                            <span>{item.name}</span>
                            <div>
                                <span>{item.price.from}</span>
                                <a>{" - "}</a>
                                <span>{item.price.to}</span>
                            </div>
                        </div>
                    </MayYouLikeItem>)}

                </MayYouLike>
            </ProductViewDetailedOption>
            <RelatedProducts />
            <SuperDiscount />
        </ProductViewContainer>
    )
}
