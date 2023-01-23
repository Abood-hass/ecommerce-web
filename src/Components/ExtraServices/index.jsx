import React from 'react'
import { ExtraServicesData } from './data'
import { ExtraServicesItem, ExtraServicesView } from './style'

export default function index() {
    return (
        <ExtraServicesView>
            {ExtraServicesData.map((item, index) => <ExtraServicesItem {...item} key={index} />)}
        </ExtraServicesView>
    )
}
