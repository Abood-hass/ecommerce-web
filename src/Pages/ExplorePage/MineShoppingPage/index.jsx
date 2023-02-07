import React from 'react'
import { MainShoppingContainer, MainShoppingContainerBody } from './style'

const OffersBoard = React.lazy(() => import('../../../Components/OffersBoard'));
const MainAdsView = React.lazy(() => import('../../../Components/MainAdsView'));
const ProductGallery = React.lazy(() => import('../../../Components/ProductGallery'));
const ContactUsBox = React.lazy(() => import('../../../Components/ContactUsBox'));
const RecommendedItems = React.lazy(() => import('../../../Components/RecommendedItems'));
const ExtraServices = React.lazy(() => import('../../../Components/ExtraServices'));
const SuppliersList = React.lazy(() => import('../../../Components/SuppliersList'));
const SubscribeBar = React.lazy(() => import('../../../Components/SubscribeBar'));

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
