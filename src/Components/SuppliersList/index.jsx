import React from 'react'
import { SupplierListData } from './data'
import { SuppliersListBox, SuppliersListGroupBox } from './style'

export default function index() {
    return (
        <SuppliersListGroupBox>
            {SupplierListData.map((item, index) => <SuppliersListBox {...item} />)}
        </SuppliersListGroupBox>
    )
}
