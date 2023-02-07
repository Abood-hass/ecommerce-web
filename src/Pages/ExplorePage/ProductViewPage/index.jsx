import React from 'react'
import { RecommendedItems } from './data'
import { useLocation } from 'react-router-dom'
import { MayYouLike, MayYouLikeItem, ProductViewContainer, ProductViewDetailedOption } from './style'

const ProductPath = React.lazy(() => import('../../../Components/ProductPath'));
const ProductViewBasicsInfo = React.lazy(() => import('../../../Components/ProductViewBasicsInfo'));
const ProductInfoTab = React.lazy(() => import('../../../Components/ProductInfoTab'));
const RelatedProducts = React.lazy(() => import('../../../Components/RelatedProducts'));
const SuperDiscount = React.lazy(() => import('../../../Components/SuperDiscount'));


export default function Index() {

    const { state: product } = useLocation();

    return (

        <ProductViewContainer>
            <ProductPath path={["Technology", "Smart Phones", "Ipohnes",]} />
            <ProductViewBasicsInfo {...product} />
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
                                <>{" - "}</>
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
