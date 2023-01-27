import React from 'react'
import { MainShoppingContainer, MainShoppingContainerBody } from './style'
import OffersBoard from '../../../Components/OffersBoard'
import MainAdsView from '../../../Components/MainAdsView'
import ProductGallery from '../../../Components/ProductGallery'
import ContactUsBox from '../../../Components/ContactUsBox'
import RecommendedItems from '../../../Components/RecommendedItems'
import ExtraServices from '../../../Components/ExtraServices'
import SuppliersList from '../../../Components/SuppliersList'
import SubscribeBar from '../../../Components/SubscribeBar'

export default function Index() {
    return (
        <>
            <MainShoppingContainer>
                <MainShoppingContainerBody>
                    <MainAdsView />
                    <OffersBoard />
                    <ProductGallery filter={true} group={1} />
                    <ProductGallery header={"Consumer electronics and gadgets"} group={0} />
                    <ContactUsBox />
                    <RecommendedItems />
                    <ExtraServices />
                    <SuppliersList />
                </MainShoppingContainerBody>
            </MainShoppingContainer>
            <SubscribeBar />
        </>
    )
}
