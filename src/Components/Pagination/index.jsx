import React from 'react'
import { PaginationBtn, PaginationBtnsGroup, PaginationContainer, PaginationNumberOfItems, } from './style'

export default function index(props) {
    let availablePages = Math.floor((parseInt(props.dataLength) / parseInt(props.itemList)))
    availablePages = (availablePages < 1) ? 1 : availablePages
    return (
        <PaginationContainer>
            <PaginationBtnsGroup>
                <PaginationNumberOfItems value={props.itemList} onChange={(e) => props.changeItemList(e.target.value)}>
                    <option children={"Show " + 3} value={3} />
                    <option children={"Show " + 6} value={6} />
                    <option children={"Show " + 10} value={10} />
                </PaginationNumberOfItems>
                <div>
                    <PaginationBtn children={"<"} value={props.pageNumber} onClick={() => props.changePageNumber((props.pageNumber !== 0) ? props.pageNumber - 1 : props.pageNumber)} />
                    {[...new Array(availablePages)].map((i, ind) => <PaginationBtn style={{ fontSize: "16px" }}
                        children={ind + 1}
                        onClick={() => props.changePageNumber(ind)} />)}

                    <PaginationBtn children={">"} value={props.pageNumber} onClick={() => props.changePageNumber((props.pageNumber !== availablePages - 1) ? props.pageNumber + 1 : props.pageNumber)} />
                </div>
            </PaginationBtnsGroup>
        </PaginationContainer>
    )
}
