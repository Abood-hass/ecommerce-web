import React from 'react'
import { RadiusHeaderContainer, RangeSliderHeaderContainer, SearchFilterHeaderContainer } from './style'

export default function Index(props) {
    return (<>
        {(!props.RangeSlider && !props.Radius) && <SearchFilterHeaderContainer {...props} />}
        {(props.RangeSlider) && <RangeSliderHeaderContainer  {...props} />}
        {(props.Radius) && <RadiusHeaderContainer {...props} />}
    </>
    )
}
