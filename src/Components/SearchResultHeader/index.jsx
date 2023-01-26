import React, { useState } from 'react'
import CheckBox from '../CheckBox'
import { SearchResultsBody, SearchResultsDropList, SearchResultsHeader, SearchResultsMenuSwitch } from './style'

import grid from '../../Assest/Images/icon-grid.png'
import menu from '../../Assest/Images/icon-menu.png'

export default function Index(props) {
    const [Switch, setSwtch] = useState(0);
    const [Verified, setVerified] = useState(true);
    return (
        // <SearchResultsBody>
        //     <div></div>
        <SearchResultsHeader>
            <div>
                {props.count || 0} items in <b>{props.category || "this category"}</b>
            </div>
            <div>
                <CheckBox label="Verified only" value={Verified} onClick={_ => setVerified(prev => !prev)} />
                <SearchResultsDropList children={<option>Featured</option>} />
                <SearchResultsMenuSwitch style={{ background: `linear-gradient(${Switch && '-'}90deg, #fff 50%, #DADADA 50%)` }}>
                    <img src={grid} onClick={_ => setSwtch(1)} />
                    <img src={menu} onClick={_ => setSwtch(0)} />
                </SearchResultsMenuSwitch>
            </div>
        </SearchResultsHeader>
        /* </SearchResultsBody> */
    )
}
