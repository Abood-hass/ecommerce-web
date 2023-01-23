import React, { useEffect, useState } from 'react'
import { OfferBoardBody, OfferBoardContainer, OfferBoardCounter, OfferBoardCounterContainer, OfferBoardCounterDeadLine, OfferBoardCounterItemsContainer, OfferBoardTitle } from './style'
import OfferCard from './OfferCard'
import { OffersData } from './data'

export default function Index() {
    const second = 1;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;

    let TimerValue = 4 * day + 13 * hour + 34 * minute + 10 * second;
    const [times, setTimes] = useState(TimerValue)
    const [Timer, setTimer] = useState([
        { label: "Day", val: Math.floor(times / day), unit: day },
        { label: "Hour", val: Math.floor((times - 4 * day) / hour), unit: hour },
        { label: "Min", val: Math.floor((times - (4 * day) - (13 * hour)) / minute), unit: minute },
        { label: "Sec", val: Math.floor((times - (4 * day) - (13 * hour) - (34 * minute)) / second), unit: second }
    ])




    function updateTime() {
        setTimes(prevStat => --prevStat);
        Timer.map((item, index) => {
            console.log(item);
            if (item.val === 0) {
                Timer[1 - index].val -= 1;
                return item.val += (1 * Timer[1 - index].unit)
            } else {
                return item.val
            }
        })

    }

    // useEffect(() => {
    //     const interval = setInterval(
    //         updateTime
    //         , 1000);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

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
            {OffersData.map((item, index) => <OfferCard key={index} {...item} />)}
        </OfferBoardContainer>
    )
}
