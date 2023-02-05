import React, { useState } from 'react'
import { OfferBoardBody, OfferBoardContainer, OfferBoardCounter, OfferBoardCounterContainer, OfferBoardCounterItemsContainer, OfferBoardTitle } from './style'
import OfferCard from './OfferCard'
import { OffersData } from './data'
import { useNavigate } from 'react-router-dom'

export default function Index() {
    const navigate = useNavigate()

    const second = 1;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;

    let TimerValue = 4 * day + 13 * hour + 34 * minute + 10 * second;
    const [times,] = useState(TimerValue)
    const [Timer,] = useState([
        { label: "Day", val: Math.floor(times / day), unit: day },
        { label: "Hour", val: Math.floor((times - 4 * day) / hour), unit: hour },
        { label: "Min", val: Math.floor((times - (4 * day) - (13 * hour)) / minute), unit: minute },
        { label: "Sec", val: Math.floor((times - (4 * day) - (13 * hour) - (34 * minute)) / second), unit: second }
    ])




    const OfferBoardCounterDeadLine = () => {
        return <OfferBoardCounterContainer>
            <OfferBoardTitle children="Deals and offers" />
            <OfferBoardBody children="Hygiene equipments" />
            <OfferBoardCounter>
                {Timer.map((i, ind) => <OfferBoardCounterItemsContainer key={ind} {...i} />)}
            </OfferBoardCounter>
        </OfferBoardCounterContainer>
    }


    return (
        <OfferBoardContainer>
            <OfferBoardCounterDeadLine></OfferBoardCounterDeadLine>
            {OffersData.map((item, index) => <OfferCard onClick={_ => navigate("/explore/product", { state: item })} key={index} {...item} />)}
        </OfferBoardContainer>
    )
}
