import React from 'react'
import { RecommendedListData } from './data'
import { RecommendedGroupItems, RecommendedHeader, RecommendedItemCard, RecommendedList } from './style'

export default function index() {
    return <RecommendedList>
        <RecommendedHeader children={"Recommended items"} />
        <RecommendedGroupItems>
            {RecommendedListData.map((item, index) => <RecommendedItemCard {...item} key={item.name + index} />)}
            {/* <RecommendedItemCard />
            <RecommendedItemCard />
            <RecommendedItemCard />
            <RecommendedItemCard />
            <RecommendedItemCard />
            <RecommendedItemCard />
            <RecommendedItemCard />
            <RecommendedItemCard />
            <RecommendedItemCard />
            <RecommendedItemCard /> */}
        </RecommendedGroupItems>
    </RecommendedList>
}
