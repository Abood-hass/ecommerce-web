import React from 'react'
import {
    DiscountsViewGroup,
    DiscountsViewItem,
    MainAdsViewContainer,
    MainAdsViewItemViewedBox,
    MainAdsViewItemViewedContainer,
    MainAdsViewItemViewedImage,
    MainAdsViewList,
    MainAdsViewListItem,
    MainAdsViewListItemText,
    Startup
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

            <DiscountsViewGroup>
                <Startup />
                <DiscountsViewItem children={'Get US $10 off with a new supplier'} />
                <DiscountsViewItem children={'Send quotes with supplier preferences'} />
            </DiscountsViewGroup>
        </MainAdsViewContainer>
    )
}
