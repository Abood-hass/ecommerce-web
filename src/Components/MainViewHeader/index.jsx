import React from 'react'
import { HeaderContainer, HeaderSecondContainer, HeaderSecondGroup, NavIcon, NavIconsGroup, NavImage, NavText, OptionHeaderMenu, SecondHeaderItem, SecondHeaderItemImg, SelectHeaderMenu } from './style'
import profile from '../../Assest/Images/profile-icon-48.png'
import message from '../../Assest/Images/message-icon.png'
import favoraite from '../../Assest/Images/favoraite-icon-64.png'
import cart from '../../Assest/Images/the-cart-icon-48.png'
import menu from '../../Assest/Images/icon-menu-50.png'
import LogoComponent from '../../Components/LogoComponent'
import SearchBar from '../../Components/SearchBar'

export default function Index() {
    return (
        <div>
            <HeaderContainer>
                <LogoComponent />
                <SearchBar />
                <NavIconsGroup>
                    <NavIcon ><NavImage src={profile} /><NavText children={"Profile"} /></NavIcon>
                    <NavIcon ><NavImage src={message} /><NavText children={"Message"} /></NavIcon>
                    <NavIcon ><NavImage src={favoraite} /><NavText children={"Favoraite"} /></NavIcon>
                    <NavIcon ><NavImage src={cart} /><NavText children={"The Cart"} /></NavIcon>
                </NavIconsGroup>
            </HeaderContainer>
            <HeaderSecondContainer>
                <HeaderSecondGroup>
                    <SecondHeaderItem> <SecondHeaderItemImg src={menu} /> <span>All category</span></SecondHeaderItem>
                    <SecondHeaderItem>  <span>Hot offers</span></SecondHeaderItem>
                    <SecondHeaderItem>  <span>Gift boxes</span></SecondHeaderItem>
                    <SecondHeaderItem>  <span>Projects</span></SecondHeaderItem>
                    <SecondHeaderItem>  <span>Menu item</span></SecondHeaderItem>
                    <SecondHeaderItem>  <SelectHeaderMenu><OptionHeaderMenu children={'Help'} /></SelectHeaderMenu></SecondHeaderItem>
                </HeaderSecondGroup>
                <HeaderSecondGroup >
                    <SecondHeaderItem>  <SelectHeaderMenu><OptionHeaderMenu children={'English, USD'} /></SelectHeaderMenu></SecondHeaderItem>
                    <SecondHeaderItem>  <SelectHeaderMenu><OptionHeaderMenu children={'Ship to'} /></SelectHeaderMenu></SecondHeaderItem>
                </HeaderSecondGroup>
            </HeaderSecondContainer>
        </div>
    )
}
