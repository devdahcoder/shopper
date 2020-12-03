import styled from "styled-components"


export const ProductDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  align-items: center;
  grid-gap: 2em;
  margin: 3em 0;
`;

export const CategoryDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  grid-gap: 2em;
`;