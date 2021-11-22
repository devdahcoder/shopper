import React, {useState} from 'react'
import SliderList from "../SliderList/SliderList"
import Bicycle from "./assets/images/bicycle.svg";
import Brush from "./assets/images/brush.svg";
import Chair from "./assets/images/chair.svg";
import Ring from "./assets/images/ring.svg";
import LeftArrow from "./assets/images/leftarrow.svg"
import RightArrow from "./assets/images/rightarrow.svg"
import { v4 as uuid } from "uuid";
import {
  TopSliderDisplay,
  TopSellerSlider,
  SliderBtnContainer,
  SliderBtn,
  SliderBtnImg,
  SliderContent,
  SliderFigure,
} from "../../components/Slider";

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

    const [images] = useState(initialState);
    const [currentImage, setCurrentImage] = useState(images[0]);

    // next slider button
    const next = () => {
        const newIndex = currentImage.index + 1;

        setCurrentImage(images[newIndex]);

    };



    // previous slider button
    const prev = () => {
        const newIndex = currentImage.index - 1;

        setCurrentImage(images[newIndex]);

    };


    return (
      <TopSliderDisplay>

        <TopSellerSlider>

          <SliderBtnContainer>

            <SliderBtn
              onClick={prev}
              disabled={currentImage.index === 0}
            >

              <SliderBtnImg src={LeftArrow} alt="" />

            </SliderBtn>

          </SliderBtnContainer>

          <SliderContent>

            <SliderFigure
              style={{
                display: "flex",
                transform: `translateX(-${
                  currentImage.index * (100 / images.length) /* please if you run into any issues change 55 to 100 or any digits that works for you*/
                }%)`,
              }}
            >

              {images.map((image) => (<SliderList key={uuid()} image={image} />))}

            </SliderFigure>

          </SliderContent>

          <SliderBtnContainer>

            <SliderBtn onClick={next} disabled={currentImage.index === images.length - 4}>

              <SliderBtnImg src={RightArrow} alt="" />

            </SliderBtn>

          </SliderBtnContainer>

        </TopSellerSlider>

      </TopSliderDisplay>

    );

}

export default SliderDisplay
