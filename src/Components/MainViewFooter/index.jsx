import React, { useState } from 'react'
import { FooterBrandGroup, FooterBrandSoicalMedia, FooterContainer, FooterCopyRightBar, FooterLinksGroup } from './style'
import LogoComponent from '../../Components/LogoComponent'
import AppStoreIcon from '../../Assest/Images/DownloadIcons/AppStoreIcon.png'
import GooglePlayIcon from '../../Assest/Images/DownloadIcons/GooglePlayIcon.jpg'

import Arabic from '../../Assest/Images/Suppliers/Image1.png'
import USA from '../../Assest/Images/Suppliers/Image3.png'
import China from '../../Assest/Images/Suppliers/Image9.png'

import { Icons, links } from './Data'

export default function Index() {
    const [lang, setlang] = useState(0);
    const langs = [USA, China, Arabic,]

    return (
        <>
            <FooterContainer>
                <FooterBrandGroup>
                    <LogoComponent logoStyle={{ height: "45px" }} nameStyle={{ fontSize: "30px" }} />
                    <span>Best information about the company gies here but now lorem ipsum is</span>
                    <FooterBrandSoicalMedia>
                        {Icons.map((icon, index) => <img src={icon} key={index} alt="" />)}
                    </FooterBrandSoicalMedia>
                </FooterBrandGroup>
                {links.map((group, index1) => {
                    return <FooterLinksGroup key={index1} style={{ gap: "15px" }}>
                        {group.map((link, index2) => <span key={index2}>{link}</span>)}
                    </FooterLinksGroup>
                })}
                <FooterLinksGroup style={{ gap: "15px" }}>
                    <span>Get app</span>
                    <img src={AppStoreIcon} />
                    <img src={GooglePlayIcon} />
                </FooterLinksGroup>
            </FooterContainer>
            <FooterCopyRightBar>
                <span>© 2023 Ecommerce.</span>
                <div>
                    <img src={langs[lang]} />
                    <select onChange={(e) => setlang(e.target.value)}>
                        <option value={0}>English</option>
                        <option value={1}>China</option>
                        <option value={2}>Arabic</option>
                    </select>
                </div>
            </FooterCopyRightBar>

        </>
    )
}
