import React, {useState} from 'react'
import "./assets/style/index.css";
import SliderList from "../SliderList/SliderList"
import Bicycle from "./assets/images/bicycle.svg";
import Brush from "./assets/images/brush.svg";
import Chair from "./assets/images/chair.svg";
import Ring from "./assets/images/ring.svg";
import LeftArrow from "./assets/images/leftarrow.svg"
import RightArrow from "./assets/images/rightarrow.svg"
import { v4 as uuid } from "uuid";

const initialState = [
  {
    index: 0,
    pix: Bicycle,
    name: "Jewelry",
  },
  {
    index: 1,
    pix: Brush,
    name: "Furniture",
  },
  {
    index: 2,
    pix: Chair,
    name: "Makeup",
  },
  {
    index: 3,
    pix: Ring,
    name: "Sports Equipment",
  },
  {
    index: 4,
    pix: Ring,
    name: "Sports Equipment",
  },
  {
    index: 5,
    pix: Brush,
    name: "Furniture",
  },
  {
    index: 6,
    pix: Chair,
    name: "Makeup",
  },
  {
    index: 7,
    pix: Ring,
    name: "Sports Equipment",
  },
];

const SliderDisplay = () => {

    const [properties, setProperties] = useState(initialState);
    const [property, setProperty] = useState(properties[0]);

    // next slider button
    const next = () => {
        const newIndex = property.index + 1;

        setProperty(properties[newIndex]);

        if (property.index + 1 > properties.length - 1) {
            setProperty(properties[0]);
        }

    };



    // previous slider button
    const prev = () => {
        const newIndex = property.index - 1;

        setProperty(properties[newIndex]);


        console.log(properties[newIndex]);
        console.log(property.index - 1);

        // if (property.index - 1 < properties.length + 1) {
        //     setProperty(properties[properties.length]);
        // }

    };


    return (
      <div className="top-seller-display">
        <div className="top-seller-slider">
          <img onClick={prev} src={LeftArrow} alt="" />

          <div className="figure">
            <div
            className="slider-figure"
              style={{ display: "flex",
                transform: `translateX(-${
                  property.index * (100 / properties.length)
                }%)`,
              }}
            >
              {properties.map((property) => (
                <SliderList key={uuid()} property={property} />
              ))}
            </div>

            {/* <SliderList property={property} /> */}
          </div>

          <img onClick={next} src={RightArrow} alt="" />
        </div>
      </div>
    );
}

export default SliderDisplay
