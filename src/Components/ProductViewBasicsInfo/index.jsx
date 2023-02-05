import React, { useContext, useState } from 'react'
import { ProductViewBasicsInfo, ProductViewImage, ProductViewImagesGroup, ProductViewImagesViewer, ProductViewInfoAndPrice, ProductViewPriceForPisces, ProductViewRowInfo, ProductViewSpliterInfo, SupplierAddress, SupplierInfo, SupplierInfoRow, SupplierName, SupplierRequestBn } from './style'
import ProductRate from '../../Components/ProductRate'
import Button from '../../Components/Button'

import iconSupplier from '../../Assest/Images/icon-supplier.png'
// import Image1 from '../../Assest/Images/Suppliers/Image1.png'
// import Image2 from '../../Assest/Images/Suppliers/Image2.png'
// import Image3 from '../../Assest/Images/Suppliers/Image3.png'
// import Image4 from '../../Assest/Images/Suppliers/Image4.png'
import Image5 from '../../Assest/Images/Suppliers/Image5.png'

import approval from '../../Assest/Images/icon-approval.png'
import globe from '../../Assest/Images/icon-globe.png'
import { LightBlue } from '../ColorSchema'
import { CartCont, } from '../../ContextApi/CartContext'

export default function Index(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const imgs = [
        props.img,
        props.img,
        props.img,
    ]

    const { cart, addToCart } = useContext(CartCont)

    const product = { ...props };


    return (
        <ProductViewBasicsInfo>
            <ProductViewImagesViewer>
                <ProductViewImage src={imgs[currentImage]} />
                <ProductViewImagesGroup>
                    {imgs.map((img, index) => <img src={img || ""} alt="" onClick={() => setCurrentImage(index)} />)}
                </ProductViewImagesGroup>
            </ProductViewImagesViewer>
            <ProductViewInfoAndPrice>
                <span>
                    {props.productName || "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle"}
                </span>
                <ProductRate basicsInfo={true} />
                <ProductViewPriceForPisces>
                    <div>
                        <span>98.00</span>
                        <span>100-50</span>
                    </div>
                    <div>
                        <span>98.00</span>
                        <span>100-50</span>
                    </div>
                    <div>
                        <span>98.00</span>
                        <span>100-50</span>
                    </div>
                </ProductViewPriceForPisces>
                <ProductViewRowInfo><span>Price</span> <span>Negotiable</span></ProductViewRowInfo>
                <ProductViewSpliterInfo />

                <ProductViewRowInfo><span>Type</span> <span>Classic  shoes</span></ProductViewRowInfo>
                <ProductViewRowInfo><span>Material</span> <span>Plastic material</span></ProductViewRowInfo>
                <ProductViewRowInfo><span>Design</span> <span>Modern nice</span></ProductViewRowInfo>
                <ProductViewSpliterInfo />

                <ProductViewRowInfo><span>Customization</span> <span>Classic  shoes</span></ProductViewRowInfo>
                <ProductViewRowInfo><span>Protection</span> <span>Plastic material</span></ProductViewRowInfo>
                <ProductViewRowInfo><span>Warranty</span> <span>Modern nice</span></ProductViewRowInfo>
                <ProductViewSpliterInfo />
            </ProductViewInfoAndPrice>

            <SupplierInfo>
                <SupplierName>
                    <img src={props.supplierImg || iconSupplier} alt='' />
                    <div>
                        <span>Supplier</span><br />
                        <span>{props.supplierName || "Guanjoi Trading LLC"}</span>
                    </div>
                </SupplierName>
                <ProductViewSpliterInfo />
                <SupplierAddress>
                    <SupplierInfoRow>
                        <img src={Image5} alt="" />
                        <span>
                            Germany, Berlin
                        </span>
                    </SupplierInfoRow>
                    <SupplierInfoRow>
                        <img src={approval} alt="" />
                        <span>
                            Verified Seller
                        </span>
                    </SupplierInfoRow>
                    <SupplierInfoRow>
                        <img src={globe} alt="" />
                        <span>
                            Worldwide shipping
                        </span>
                    </SupplierInfoRow>
                </SupplierAddress>
                <SupplierRequestBn>
                    <Button style={{ fontSize: '16px' }} label={"Send inquiry"} />
                    <Button BG={"#fff"} labelColor={LightBlue} style={{ fontSize: '16px' }} label={"Seller’s profile"} onClick={_ => console.log(cart)} />
                    <Button BG={"green"} style={{ fontSize: '16px' }} label={"Add to Cart"} onClick={() => addToCart(product)} />
                </SupplierRequestBn>
            </SupplierInfo>
        </ProductViewBasicsInfo>
    )
}
