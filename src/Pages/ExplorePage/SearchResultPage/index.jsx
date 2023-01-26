import React, { useEffect, useState } from 'react'
import { MainShoppingContainer } from '../MineShoppingPage/style'
import ProductPath from '../../../Components/ProductPath'
import SearchResultHeader from '../../../Components/SearchResultHeader'
import ProductResultSearchCard from '../../../Components/ProductResultSearchCard'
import SearchFilter from '../../../Components/SearchFilter'
import { SearchResultsBody, SearchResultsItemsList } from './style'
import { BrandsHeader, BrandsOptions, ConditionHeader, ConditionOptions, FeaturesHeader, FeaturesOptions, FilterHeader, FilterOptions, ProductData } from './data'
import { RadiusHeaderContainer, RangeSliderHeaderContainer } from '../../../Components/SearchFilter/style'
import Pagination from '../../../Components/Pagination'
import UsedFilter from '../../../Components/UsedFilter'


export default function Index() {

    const [page, setPage] = useState(0)
    const [itemsCount, setItemsCount] = useState(6)



    const [showed, Show] = useState(
        [
            { header: "Category", open: true },
            { header: "Brand", open: true },
            { header: "Feature", open: true },
            { header: "Price range", open: true },
        ]
    )

    const [category] = useState(FilterOptions)
    const [filters, setFilters] = useState([])

    const [availableFilters, setAvailableFilters] = useState(
        [
            { header: "Category", options: FilterOptions, showed: true, },
            { header: "Brands", options: BrandsOptions, showed: true, multiChoose: true },
        ]
    )


    const onChangeFilter = (key) => {
        setAvailableFilters(prevState => prevState.map(
            item => {
                return { ...item, options: item.options.map(f => ({ ...f, value: !f.value })) }
            }
        ))
    }


    const openSlid = (slider) => {
        setAvailableFilters(perv => perv.map((i) =>
            (i.header === slider.header) ?
                ({ ...i, showed: !slider.showed })
                : i))
    }

    useEffect(() => {
        console.log("itemsCount" + ProductData.slice(page, parseInt(itemsCount) + parseInt(page)).length);
    })

    return (

        <MainShoppingContainer>
            <ProductPath />

            <SearchResultsBody>
                <div>
                    {availableFilters.map((filter, index) => <SearchFilter {...filter} selectFun={onChangeFilter} show={_ => openSlid(filter)} />)}
                    <RangeSliderHeaderContainer header={"Price range"} showed={showed[3].open} show={_ => openSlid(showed[3])} />
                    <RadiusHeaderContainer header={ConditionHeader} options={ConditionOptions} />
                </div>
                <div>
                    <SearchResultHeader />
                    <UsedFilter filters={filters} />
                    <SearchResultsItemsList>
                        {ProductData.slice(page, parseInt(itemsCount) + parseInt(page)).map((product, index) => <ProductResultSearchCard index={index} {...product} />)}
                    </SearchResultsItemsList>
                </div>
            </SearchResultsBody>
            <Pagination itemList={itemsCount} changeItemList={setItemsCount} pageNumber={page} changePageNumber={setPage} />
        </MainShoppingContainer>
    )
}
