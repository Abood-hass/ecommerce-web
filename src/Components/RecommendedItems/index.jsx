import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RecommendedListData } from './data'
import { RecommendedGroupItems, RecommendedHeader, RecommendedItemCard, RecommendedList } from './style'

export default function Index() {
    const navigateion = useNavigate()
    return <RecommendedList>
        <RecommendedHeader children={"Recommended items"} />
        <RecommendedGroupItems>
            {RecommendedListData.map((item, index) => <RecommendedItemCard onClick={_ => navigateion("/explore/product", item)}  {...item} key={item.name + index} />)}
        </RecommendedGroupItems>
    </RecommendedList>
}
