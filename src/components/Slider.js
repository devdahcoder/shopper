import styled from "styled-components"


export const TopSliderDisplay = styled.div `
position: absolute;
    width: 100%;
    margin-top: -80px;
`

export const TopSellerSlider = styled.div `
display: flex;
        border-radius: 4px;
        align-items: center;
        justify-content: space-between;
        background-color: #ffffff;
        box-shadow: 1.4px 20px 221px rgba(255, 255, 255, 0.5);
        box-shadow: 0.8px 12px 68px rgba(9, 9, 9, 0.3);
        padding: 0 .5em;
        max-width: 80%;
        margin: 0 auto;
`
export const SliderBtnContainer = styled.div `
background-color: #ffffff;
`

export const SliderBtn = styled.button `
cursor: pointer;
border: none;
background-color: inherit;
outline: none;
`

export const SliderBtnImg = styled.img `
vertical-align: middle;
`;

export const SliderContent = styled.div`
  display: flex;
  align-content: center;
  max-width: 95%;
  overflow: hidden;
`;


export const SliderFigure = styled.div `
transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`