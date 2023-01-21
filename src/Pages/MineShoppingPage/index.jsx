import React from 'react'
import { DiscountsViewGroup, MainShoppingContainer, MainShoppingContainerBody } from './style'
import MainViewHeader from '../../Components/MainViewHeader'
import MainAdsView from '../../Components/MainAdsView'

export default function Index() {
    return (
        <MainShoppingContainer>
            <MainViewHeader />
            <MainShoppingContainerBody>
                <MainAdsView />
            </MainShoppingContainerBody>
        </MainShoppingContainer>
    )
}
