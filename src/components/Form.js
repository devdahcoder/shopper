import styled, {css} from "styled-components"



export const Form = styled.form `

`

export const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  outline: none;
  border: solid 1px #c6c6c5;
  border-radius: 3px;

  ${({ file }) =>
    file &&
    css`
      margin-left: 1.5em;
      width: initial;
      padding: initial;
      border: none;
      border-radius: 3px;
    `}
`;
export const Select = styled.select`
  width: 100%;
  padding: 10px 5px;
  outline: none;
  border: solid 1px #c6c6c5;
  border-radius: 3px;
`;

export const Label = styled.label`
  ${"" /* width: 100%; */}
  ${"" /* padding: 1em 0; */}
  font-size: 14px;
  font-weight: 400;
  ${"" /* margin-bottom: 1.5em; */}
  line-height: 30px;

  ${({ webLabel }) =>
    webLabel &&
    css`
      color: #878786;
      line-height: 40px;
    `}
`;

export const TextInput = styled.input`
  width: 300px;
  border: solid 1px #c6c6c5;
  height: 40px;
  border-radius: 3px 0 0 3px;
  padding: 0 0 0 12px;
  font-family: "Fira Code", monospace;
  outline: none;
`;

export const CheckBoxDisplay = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const CheckBox = styled.input`
  width: 1.3em;
  height: 1.3em;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: grey;
  }
  margin-right: 10px;
`;

export const SubmitBtn = styled.input`
  width: 80px;
  height: 40px;
  background-color: #8bc34a;
  color: #ffffff;
  border: solid 1px #8bc34a;
  border-radius: 0 3px 3px 0;
  transition: all 0.3s ease 0s;
  font-family: "Fira Code", monospace;
  cursor: pointer;
`;


export const ApplicationContainer = styled.div`
  border: solid 1px #c6c6c5;
  background: #ffffff;
  border-radius: 5px;
  padding: 2em 1em;

  ${({ confirmAccount }) =>
    confirmAccount &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8em 1em;
    `}
`;

export const FormDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 50px;
  width: 80%;

  ${({ selectInput }) =>
    selectInput &&
    css`
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 2em;
      width: initial;
      margin: 2.5em 0;
    `}

  ${({ businessLicense }) =>
    businessLicense &&
    css`
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 2em;
      margin-bottom: 10em;
      width: initial;
    `}
  ${({ webForm }) =>
    webForm &&
    css`
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2em;
      width: initial;
    `}
  
  ${({ contactName }) =>
    contactName &&
    css`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 1em;
      width: initial;
    `}
  
  ${({ contactAddress }) =>
    contactAddress &&
    css`
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 1em;
      margin: 1.5em 0;
      width: initial;
    `}
  
  ${({ shippingAddress }) =>
    shippingAddress &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1em;
      width: initial;
    `}
  
  ${({ paymentCode }) =>
    paymentCode &&
    css`
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 1em;
      width: initial;
    `}
`;

export const FormDisplayRows = styled.div`
  display: grid;
  ${({ shippingEmail }) =>
    shippingEmail &&
    css`
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 1em;
      margin: 2em 0;
    `}

  ${({ paymentCard }) =>
    paymentCard &&
    css`
      grid-template-rows: repeat(3, 1fr);
      grid-row-gap: 1em;
      margin-bottom: 2em;
    `}
`;

export const InputDiv = styled.div `
margin-bottom: 2em;
`

export const ContactMailHeader = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: #8bc34a;
  border-bottom: solid 1px #c6c6c5;
  padding: 10px 0;
`;

export const ContactNotification = styled.div`
  font-size: 14px;
  font-weight: 400;
  padding: 10px 0;
`;

export const ContactBtnLink = styled.div`
  color: #1c1c1b;
  font-size: 14.004px;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.28008px;
`;

