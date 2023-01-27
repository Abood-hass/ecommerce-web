import React from 'react'
import { Details, Features, InfoTable, ProductDescriptionContainer } from './style'
import feature from '../../Assest/Images/icon-features.png'

export default function index() {
    const TableDetails = [
        { label: "Model", value: "#8786867" },
        { label: "Style", value: "Classic style" },
        { label: "Certificate", value: "ISO-898921212" },
        { label: "Size", value: "34mm x 450mm x 19mm" },
        { label: "Memory", value: "36GB RAM" },
    ]
    const FeaturesContent = [
        "Some great feature name here",
        "Lorem ipsum dolor sit amet, consectetur ",
        "Duis aute irure dolor in reprehenderit",
        "Some great feature name here"
    ]
    return (
        <ProductDescriptionContainer>
            <Details children={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
            <InfoTable>
                {TableDetails.map(row => <tr>
                    <td>
                        {row.label}
                    </td>
                    <td>
                        {row.value}
                    </td>
                </tr>)}
            </InfoTable>
            <br />
            {FeaturesContent.map(featureContent => <Features>
                <img alt='' src={feature} /><span>{featureContent}</span>
            </Features>)}
        </ProductDescriptionContainer>
    )
}
