import React from 'react'
import CheckBox from '../CheckBox'
import { SearchResultsDropList, SearchResultsHeader, SearchResultsMenuSwitch } from './style'

import grid from '../../Assest/Images/icon-grid.png'
import menu from '../../Assest/Images/icon-menu.png'

export default function Index(props) {
    return (
        <SearchResultsHeader>
            <div>
                {props.count || 0} items in <b>{props.category || "this category"}</b>
            </div>
            <div>
                <CheckBox label="Verified only" value={props.verify} onClick={_ => props.setVerified(prev => !prev)} />
                <SearchResultsDropList children={<option>Featured</option>} />
                <SearchResultsMenuSwitch style={{ background: `linear-gradient(${props.switch ? '' : '-'}90deg, #fff 50%, #DADADA 50%)` }}>
                    <img src={grid} onClick={_ => props.setSwitch(false)} alt="" />
                    <img src={menu} onClick={_ => props.setSwitch(true)} alt="" />
                </SearchResultsMenuSwitch>
            </div>
        </SearchResultsHeader>
    )
}
