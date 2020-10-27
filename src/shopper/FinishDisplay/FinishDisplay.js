import React, {useState} from 'react'
import "./assets/style/index.css"
import FinishList from "../FinishList/FinishList"

const initialState = [
  {
    id: 1,
    filter: "Metal",
  },
  {
    id: 2,
    filter: "Metal",
  },
  {
    id: 3,
    filter: "Metal",
  },
  {
    id: 4,
    filter: "Metal",
  },
  {
    id: 5,
    filter: "Metal",
  },
  {
    id: 6,
    filter: "Metal",
  },
  {
    id: 7,
    filter: "Metal",
  },
  {
    id: 8,
    filter: "Metal",
  },
  {
    id: 9,
    filter: "Metal",
  },
  {
    id: 10,
    filter: "Metal",
  },
  {
    id: 11,
    filter: "Metal",
  },
];

const FinishDisplay = () => {

    const [finishs, setFinish] = useState(initialState);


    return (
      <div className="finish-display">
        {finishs.map((finish) => (
          <FinishList key={finish.id} finish={finish} />
        ))}
      </div>
    );
}

export default FinishDisplay
