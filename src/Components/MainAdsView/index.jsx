import React from 'react'
import {
    DiscountsViewGroup,
    MainAdsViewContainer,
    MainAdsViewItemViewedBox,
    MainAdsViewItemViewedContainer,
    MainAdsViewItemViewedImage,
    MainAdsViewList,
    MainAdsViewListItem,
    MainAdsViewListItemText
} from './style'

import { useState } from 'react';
import { adsItem } from './data';

export default function Index() {
    const [currentImage, setCurrentImage] = useState(0);

    const SelectedStyle = {
        background: '#E5F1FF',
        fontWeight: '500'
    }


    return (
        <MainAdsViewContainer>
            <MainAdsViewList >

                {adsItem.map((item, index) =>
                    <MainAdsViewListItem onClick={() => setCurrentImage(index)} key={item.name} style={(index === currentImage) ? SelectedStyle : {}}>
                        <MainAdsViewListItemText children={item.name} />
                    </MainAdsViewListItem>)}
            </MainAdsViewList>
            <MainAdsViewItemViewedContainer>
                <MainAdsViewItemViewedImage src={adsItem[currentImage].img} />
                <MainAdsViewItemViewedBox text1={adsItem[currentImage].header} text2={adsItem[currentImage].body} />
            </MainAdsViewItemViewedContainer>

            <DiscountsViewGroup>a</DiscountsViewGroup>
        </MainAdsViewContainer>
    )
}
