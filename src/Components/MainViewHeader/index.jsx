import React, { useContext } from 'react'
import { HeaderContainer, HeaderSecondContainer, HeaderSecondGroup, MainHeaderContainer, MobileFriendlyHeader, MobileFriendlySearch, NavIcon, NavIconsGroup, NavImage, NavText, OptionHeaderMenu, SecondHeaderItem, SecondHeaderItemImg, SelectHeaderMenu } from './style'
import profile from '../../Assest/Images/profile-icon-48.png'
import message from '../../Assest/Images/message-icon.png'
import favoraite from '../../Assest/Images/favoraite-icon-64.png'
import cartIcon from '../../Assest/Images/the-cart-icon-48.png'
import menu from '../../Assest/Images/icon-menu-50.png'
import LogoComponent from '../../Components/LogoComponent'
import SearchBar from '../../Components/SearchBar'
import { useNavigate } from 'react-router-dom'
import { SearchBarInput } from '../SearchBar/style'
import { CartCont } from '../../ContextApi/CartContext'

export default function Index(props) {

    const { cart } = useContext(CartCont)


    const navigation = useNavigate()
    return (
        <MainHeaderContainer>
            <HeaderContainer>
                <LogoComponent />
                {props.HideSearchBar ? <div></div> : <SearchBar />}
                <NavIconsGroup>
                    <NavIcon ><NavImage src={profile} /><NavText children={"Profile"} /></NavIcon>
                    <NavIcon ><NavImage src={message} /><NavText children={"Message"} /></NavIcon>
                    <NavIcon ><NavImage src={favoraite} /><NavText children={"Favoraite"} /></NavIcon>
                    <NavIcon onClick={_ => navigation('/cart')}  ><NavImage src={cartIcon} /><NavText children={`The Cart ${cart.length ? `(${cart.length})` : ``}`} /></NavIcon>
                </NavIconsGroup>
            </HeaderContainer>
            <HeaderSecondContainer style={props.HideSecond ? { display: "none" } : {}}>
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
            <MobileFriendlyHeader>
                <div><img src={menu} /> <LogoComponent /></div>
                <div><img src={cart} /> <img src={profile} /> </div>
            </MobileFriendlyHeader>
            <MobileFriendlySearch>
                <SearchBarInput />
            </MobileFriendlySearch>
        </MainHeaderContainer>
    )
}
