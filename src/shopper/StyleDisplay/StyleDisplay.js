import React, {useState} from 'react'
import "./assets/style/index.css"
import StyleList from "../StyleList/StyleList"

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
    {
        id: 12,
        filter: "Metal"
    },
    {
        id: 13,
        filter: "Metal"
    },
    {
        id: 14,
        filter: "Metal"
    },
    {
        id: 15,
        filter: "Metal"
    },
    {
        id: 16,
        filter: "Metal"
    },
    {
        id: 17,
        filter: "Metal"
    },
    {
        id: 18,
        filter: "Metal"
    },
    {
        id: 19,
        filter: "Metal"
    },
    {
        id: 20,
        filter: "Metal"
    },
    {
        id: 21,
        filter: "Metal"
    },
    {
        id: 22,
        filter: "Metal"
    },
    {
        id: 23,
        filter: "Metal"
    },
]



const StyleDisplay = () => {

    const [styles, setStyles] = useState(initialState);


    return (
      <div className="style-display">
        {styles.map((style) => (
          <StyleList key={style.id} style={style} />
        ))}
      </div>
    );
}

export default StyleDisplay
