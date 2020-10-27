import React, {useState} from 'react'
import "./assets/style/index.css"
import MaterialList from "../MaterialList/MaterialList"


const initialState = [
    {
        id: 1,
        filter: "Metal"
    },
    {
        id: 2,
        filter: "Metal"
    },
    {
        id: 3,
        filter: "Metal"
    },
    {
        id: 4,
        filter: "Metal"
    },
    {
        id: 5,
        filter: "Metal"
    },
    {
        id: 6,
        filter: "Metal"
    },
    {
        id: 7,
        filter: "Metal"
    },
    {
        id: 8,
        filter: "Metal"
    },
    {
        id: 9,
        filter: "Metal"
    },
    {
        id: 10,
        filter: "Metal"
    },
    {
        id: 11,
        filter: "Metal"
    },
]


const MaterialDisplay = () => {

    const [materials, setMaterials] = useState(initialState)
    return (
        <div className="material-display">
            {materials.map((material) => (<MaterialList key={material.id} material={material} />))}
        </div>
    )
}

export default MaterialDisplay
