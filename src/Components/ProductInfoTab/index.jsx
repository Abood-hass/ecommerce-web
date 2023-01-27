import React, { useState } from 'react'
import { NavBar } from './style'
import ProductDescription from '../ProductDescription'
import { LightBlue } from '../ColorSchema'

export default function Index() {
    const [tab, changeTab] = useState("desc")

    const Content = [
        { children: "Description", view: "desc" },
        { children: "Reviews", view: "rev" },
        { children: "Shipping", view: "ship" },
        { children: "About company", view: "company" }
    ]

    const Active = { color: LightBlue, borderColor: LightBlue }

    return (
        <div>
            <NavBar>
                {Content.map((link, indx) => <span {...link} style={(link.view === tab) ? Active : {}} onClick={_ => changeTab(link.view)} key={indx} />)}
            </NavBar>
            <div style={{ padding: '20px' }}>
                {{
                    desc: <ProductDescription />,
                    rev: <span>rev</span>,
                    ship: <span>ship</span>,
                }[tab]}
            </div>
        </div>
    )
}
