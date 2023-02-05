import React from 'react'
import { ErrorPageContainer } from './style'
import Error from '../../Assest/Images/Error.png'
import Button from '../../Components/Button'
import { useNavigate } from 'react-router-dom'

export default function Index() {
    const nav = useNavigate()

    return (
        <ErrorPageContainer>
            <img src={Error} alt='' />
            <Button label={"Back to Homepage"} style={{ width: '20%' }} onClick={_ => nav("/explore")} />
        </ErrorPageContainer>
    )
}
