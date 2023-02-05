import React from 'react'
import { RelatedProductsGroup, RelatedProductsItem, RelatedProductsPrice } from './style'

export default function index() {
    return (
        <RelatedProductsGroup>
            <span>Related products</span>
            <div>
                {[...new Array(6)].map(_ => <RelatedProductsItem>
                    <img alt="" src='https://s3-alpha-sig.figma.com/img/d5df/9baf/5b845d5b649289426578b53ebaef4c65?Expires=1675641600&Signature=iUBuNO6aW1eZY2Zz4ruGGPD2zIVah6stUj-lFVSMEG3oCmpmAqqfKtXVP47buFMOdVTCx2mvsCUnrgQFX-dc3dOmp4Dl0BtgPzTFlMq5EAC6Buuh7-VLpGbczRC5prHqW4Yaob9KGG~G7hRVVocPW6b6lnnLDR033ypChDKocPm4LYO8lmLvdAXLQNINlOYQase0CrjiDaj4Ocv3nx3VqBKkfW7DjgE6-CRB3~LNQLIn~0RBp8RiabOsB33IROaMC-8o0SxW3aJmdQv9aXwBoSSW4d9BJ6Rsz68ZYhSPyuIyipca9gtti36EnYm-I4J~5JBCZSznZho2HAqAuqO3pg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                    <span>Xiaomi Redmi 8 Original</span>
                    <RelatedProductsPrice>
                        <span>10.00</span>
                        <span>{" - "}</span>
                        <span>100.00</span>
                    </RelatedProductsPrice>
                </RelatedProductsItem>)}
            </div>
        </RelatedProductsGroup >
    )
}
