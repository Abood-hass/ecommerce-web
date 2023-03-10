import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainShoppingContainer } from '../MineShoppingPage/style'
import { SearchResultsBody, SearchResultsItemsGrid, SearchResultsItemsList } from './style'
import { BrandsHeader, BrandsOptions, ConditionHeader, ConditionOptions, FeaturesHeader, FeaturesOptions, FilterHeader, FilterOptions, ProductData } from './data'


const ProductPath = React.lazy(() => import('../../../Components/ProductPath'));
const SearchResultHeader = React.lazy(() => import('../../../Components/SearchResultHeader'));
const ProductResultSearchCard = React.lazy(() => import('../../../Components/ProductResultSearchCard'));
const ProductResultSearchGrid = React.lazy(() => import('../../../Components/ProductResultSearchGrid'));
const SearchFilter = React.lazy(() => import('../../../Components/SearchFilter'));
const Pagination = React.lazy(() => import('../../../Components/Pagination'));
const UsedFilter = React.lazy(() => import('../../../Components/UsedFilter'));
const SubscribeBar = React.lazy(() => import('../../../Components/SubscribeBar'));



export default function Index() {

    const [page, setPage] = useState(0)
    const [itemsCount, setItemsCount] = useState(6)

    const nav = useNavigate()

    const [verify, setVerified] = useState(true)

    const [switchView, setSwitchView] = useState(true)


    const [data, setData] = useState(ProductData)
    const [filters, setFilters] = useState([])

    const [availableFilters, setAvailableFilters] = useState(
        [
            { header: FilterHeader, options: FilterOptions, showed: true, },
            { header: BrandsHeader, options: BrandsOptions, showed: true, multiChoose: true },
            { header: FeaturesHeader, options: FeaturesOptions, showed: true, ChooseOptions: true, multiChoose: true },
            { header: "Price range", showed: true, RangeSlider: true },
            { header: ConditionHeader, showed: true, options: ConditionOptions, Radius: true },

        ]
    )


    const onChangeFilter = (key) => {
        setAvailableFilters(prevState => prevState.map(item => ({
            ...item, options: item.options?.map(f => {
                if (f.title === key) {
                    setFilters(prev => (f.value) ? prev.filter(e => e.title !== f.title) : ([...prev, f]))
                    return { ...f, value: !f.value }
                }
                return f
            })
        })
        ))
    }


    const openSlid = (slider) => {
        setAvailableFilters(perv => perv.map((i) =>
            (i.header === slider.header) ?
                ({ ...i, showed: !slider.showed })
                : i))
    }

    useEffect(() => {
        setData(_ => ProductData.slice((parseInt(itemsCount) * parseInt(page)), parseInt(itemsCount) + (parseInt(itemsCount) * parseInt(page))))
        console.log("page" + page);
    }, [itemsCount, page])

    return (
        <>
            <MainShoppingContainer>
                <ProductPath />

                <SearchResultsBody>
                    <div>
                        {availableFilters.map((filter, index) => <SearchFilter index={index} {...filter} selectFun={onChangeFilter} show={_ => openSlid(filter)} />)}
                    </div>
                    <div>
                        <SearchResultHeader count={ProductData.length} verify={verify} setVerified={setVerified} switch={switchView} setSwitch={setSwitchView} />
                        <UsedFilter delete={onChangeFilter} filters={filters} />
                        {switchView ?
                            <SearchResultsItemsList typeView={switchView} >
                                {data.map((product, index) => <ProductResultSearchCard index={index} {...product} onClick={_ => nav("/explore/product", { state: product })} />)}

                            </SearchResultsItemsList>
                            :
                            <SearchResultsItemsGrid>
                                {data.map((product, index) => <ProductResultSearchGrid index={index} {...product} onClick={_ => nav("/explore/product", { state: product })} />)}
                            </SearchResultsItemsGrid>}
                    </div>
                </SearchResultsBody>
                <Pagination itemList={itemsCount} changeItemList={setItemsCount} dataLength={ProductData.length} pageNumber={page} changePageNumber={setPage} />
            </MainShoppingContainer>
            <SubscribeBar />
        </>
    )
}
