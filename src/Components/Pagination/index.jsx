import React from 'react'
import { PaginationBtn, PaginationBtnsGroup, PaginationContainer, PaginationNumberOfItems, } from './style'

export default function index(props) {
    return (
        <PaginationContainer>
            <PaginationBtnsGroup>
                <PaginationNumberOfItems value={props.itemList} onChange={(e) => props.changeItemList(e.target.value)}>
                    <option children={"Show " + 3} value={3} />
                    <option children={"Show " + 6} value={6} />
                    <option children={"Show " + 10} value={10} />
                </PaginationNumberOfItems>
                <div>
                    <PaginationBtn children={"<"} value={props.pageNumber} onClick={() => props.changePageNumber(props.pageNumber - 1)} />
                    <PaginationBtn style={{ fontSize: "16px" }} children={"1"} onChange={props.changePageNumber} />
                    <PaginationBtn style={{ fontSize: "16px" }} children={"2"} onChange={props.changePageNumber} />
                    <PaginationBtn style={{ fontSize: "16px" }} children={"3"} onChange={props.changePageNumber} />
                    <PaginationBtn children={">"} value={props.pageNumber} onClick={() => props.changePageNumber(props.pageNumber + 1)} />
                </div>
            </PaginationBtnsGroup>
        </PaginationContainer>
    )
}
