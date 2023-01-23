import React from 'react'
import { MainShoppingContainer, MainShoppingContainerBody } from './style'
import MainViewHeader from '../../Components/MainViewHeader'
import OffersBoard from '../../Components/OffersBoard'
import MainAdsView from '../../Components/MainAdsView'
import ProductGallery from '../../Components/ProductGallery'
import ContactUsBox from '../../Components/ContactUsBox'

export default function Index() {
    return (
        <MainShoppingContainer>
            <MainViewHeader />
            <MainShoppingContainerBody>
                <MainAdsView />
                <OffersBoard />
                <ProductGallery filter={true} group={1} />
                <ProductGallery header={"Consumer electronics and gadgets"} group={0} />
                <ContactUsBox />
            </MainShoppingContainerBody>
        </MainShoppingContainer>
    )
}
