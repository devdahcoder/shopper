import React from 'react'
import styled, {keyframes} from "styled-components"


const animate = keyframes`
    0%, 100% {
        stroke-dashoffset: 440;
    }

    50% {
        stroke-dashoffset: 0;
    }
    50.1% {
        stroke-dashoffset: 880;
    }
`;

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;


const LoaderDisplay = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    /* background-color: grey; */
`

const SvgLoader = styled.svg `
    position: relative;
    width: 150px;
    height: 150px;
    animation: ${rotate} 2s linear infinite;
`

const Circle = styled.circle `
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 10;
    stroke: #8bc34a;
    stroke-linecap: round;
    transform: translate(5px, 5px);
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    animation: ${animate} 4s linear infinite;
`


const Loader = () => {
    return (
        <LoaderDisplay>
            <SvgLoader>
                <Circle cx="70" cy="70" r="70">

                </Circle>
            </SvgLoader>
        </LoaderDisplay>
    )
}


export default Loader