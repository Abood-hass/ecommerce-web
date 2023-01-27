import React, { useState } from 'react'
import { ProductViewBasicsInfo, ProductViewImage, ProductViewImagesGroup, ProductViewImagesViewer, ProductViewInfoAndPrice, ProductViewPriceForPisces, ProductViewRowInfo, ProductViewSpliterInfo, SupplierAddress, SupplierInfo, SupplierInfoRow, SupplierName, SupplierRequestBn } from './style'
import ProductRate from '../../Components/ProductRate'
import Button from '../../Components/Button'

import iconSupplier from '../../Assest/Images/icon-supplier.png'
import Image1 from '../../Assest/Images/Suppliers/Image1.png'
import Image2 from '../../Assest/Images/Suppliers/Image2.png'
import Image3 from '../../Assest/Images/Suppliers/Image3.png'
import Image4 from '../../Assest/Images/Suppliers/Image4.png'
import Image5 from '../../Assest/Images/Suppliers/Image5.png'

import approval from '../../Assest/Images/icon-approval.png'
import globe from '../../Assest/Images/icon-globe.png'
import { LightBlue } from '../ColorSchema'

export default function Index(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const imgs = [
        "https://s3-alpha-sig.figma.com/img/ce60/bd07/ba64362f07075659795d0e6c24963920?Expires=1675641600&Signature=iT8ngAZfNJtQWTTUPHYHekQ1PlQCvVCzkyAqkNbVnw5R6Wk0bmXl4~rqJWuvzLhyKVnQh7rtDA3JAwib~i7ind4UfcPCSYGQ5v46aJH~qxyh062zU-QNk5X~hqvB-D8ByNre0EyslaXM7IB77KNWlgE59K9TWlNcntRi0PuCXuRGey1W~Q7owlF~sItzBngdu1SY8pX15q~GQ2EYMUdbGzAm0LdNOrE6SiJZJIiVek2RBzq5--I1iSlvu1dHQUm6xUTxL-mAxcGtJkO0UIXa39BtbDUXj92GsHtuv1BSgL-zLf7gNpXi9SM1OPkHab1KBCkdZdDzROtv3E5~l73laQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://s3-alpha-sig.figma.com/img/361f/f615/0b669765823c4c4c5af81ab06e2a1158?Expires=1675641600&Signature=IYb75~h3BSuYbph7dqoLGHOxmJtqashqDXqBQcddFSHrVVHJKpZgQA4kP1Ipv-3iJdN~CEsmuhXOyp7yYPbDRRuEzNQG~kZ80ZIruk8RmzLa-WkcrceUrfi7HEwnsgD-bCkDEj0-IDy7dVsTeGXpv8BlXNrL4pxAhV53uhKQjuyjlB7WHem-ePvPtIf7~PshEXHT9sNEY3Po9Q2rnD1fD1wuaUjLdD~C-0rNwFMva9i0Kk8bw1ECOoc19fWwYOVgeflG1X39v2FhOpP6V69oZ3VHqTxAcxl2uy8dZeBY7mV5UzFbqDWYDxfj7~d1b3PF7bpmBHgosYx8XtovOPs08Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    ]
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
                    {props.titleProduct || "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle"}
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
                    <img src={props.img || iconSupplier} alt='' />
                    <div>
                        <span>Supplier</span><br />
                        <span>{props.img || "Guanjoi Trading LLC"}</span>
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
                    <Button BG={"#fff"} labelColor={LightBlue} style={{ fontSize: '16px' }} label={"Seller’s profile"} />
                </SupplierRequestBn>
            </SupplierInfo>
        </ProductViewBasicsInfo>
    )
}
