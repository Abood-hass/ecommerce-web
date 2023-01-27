import React from 'react'
import ProductPath from '../../../Components/ProductPath'
import ProductViewBasicsInfo from '../../../Components/ProductViewBasicsInfo'
import ProductInfoTab from '../../../Components/ProductInfoTab'
import { MayYouLike, MayYouLikeItem, ProductViewContainer, ProductViewDetailedOption } from './style'

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
                    <MayYouLikeItem>
                        <img src={"https://s3-alpha-sig.figma.com/img/b720/dd65/fcc6274edfb7e97f682185ec460b6d4f?Expires=1675641600&Signature=lpFx6eWJwLnWlzDSxJE2FwGay7ZSrnJ6x9Khv9PLBVrlOvsgpRurkSOBok0xt6AWr8O8ASLsF~Q14ZcqrqhkZwsAiIKZ-JvYPPCtZ6b~Vw2lGiNVH7H7HMvijLmucetvsTZ5bTQ4K-ZL5t~OPvbunlPb8B3Kvx~3jxigEAypifKklM-~gh2teUcw8QoqN9~GmlTNp6dJHTRDMHaCGeN7BM7HqVTaOldIESysJ5Inpfkp0sLtHNX5fuRSiXi9JedHC5jqsIn055buqw-68lNIY2hhGJgImJg1yPqFJsH1KaQE8E8DWdCGv~WOcnmnYkXETwh3U34kIYi6F0wLz0ub2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} />
                        <div>
                            <span>Apple Watch Series Space Gray</span>
                            <div>
                                <span>7.00</span>
                                <a>{" - "}</a>
                                <span>99.00</span>
                            </div>
                        </div>
                    </MayYouLikeItem>
                    <MayYouLikeItem>
                        <img src={"https://s3-alpha-sig.figma.com/img/b720/dd65/fcc6274edfb7e97f682185ec460b6d4f?Expires=1675641600&Signature=lpFx6eWJwLnWlzDSxJE2FwGay7ZSrnJ6x9Khv9PLBVrlOvsgpRurkSOBok0xt6AWr8O8ASLsF~Q14ZcqrqhkZwsAiIKZ-JvYPPCtZ6b~Vw2lGiNVH7H7HMvijLmucetvsTZ5bTQ4K-ZL5t~OPvbunlPb8B3Kvx~3jxigEAypifKklM-~gh2teUcw8QoqN9~GmlTNp6dJHTRDMHaCGeN7BM7HqVTaOldIESysJ5Inpfkp0sLtHNX5fuRSiXi9JedHC5jqsIn055buqw-68lNIY2hhGJgImJg1yPqFJsH1KaQE8E8DWdCGv~WOcnmnYkXETwh3U34kIYi6F0wLz0ub2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} />
                        <div>
                            <span>Apple Watch Series Space Gray</span>
                            <div>
                                <span>7.00</span>
                                <a>{" - "}</a>
                                <span>99.00</span>
                            </div>
                        </div>
                    </MayYouLikeItem>
                    <MayYouLikeItem>
                        <img src={"https://s3-alpha-sig.figma.com/img/b720/dd65/fcc6274edfb7e97f682185ec460b6d4f?Expires=1675641600&Signature=lpFx6eWJwLnWlzDSxJE2FwGay7ZSrnJ6x9Khv9PLBVrlOvsgpRurkSOBok0xt6AWr8O8ASLsF~Q14ZcqrqhkZwsAiIKZ-JvYPPCtZ6b~Vw2lGiNVH7H7HMvijLmucetvsTZ5bTQ4K-ZL5t~OPvbunlPb8B3Kvx~3jxigEAypifKklM-~gh2teUcw8QoqN9~GmlTNp6dJHTRDMHaCGeN7BM7HqVTaOldIESysJ5Inpfkp0sLtHNX5fuRSiXi9JedHC5jqsIn055buqw-68lNIY2hhGJgImJg1yPqFJsH1KaQE8E8DWdCGv~WOcnmnYkXETwh3U34kIYi6F0wLz0ub2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} />
                        <div>
                            <span>Apple Watch Series Space Gray</span>
                            <div>
                                <span>7.00</span>
                                <a>{" - "}</a>
                                <span>99.00</span>
                            </div>
                        </div>
                    </MayYouLikeItem>
                </MayYouLike>
            </ProductViewDetailedOption>
        </ProductViewContainer>
    )
}
