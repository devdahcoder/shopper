import styled, {css} from "styled-components"


export const UserApplicationInfo = styled.p`
  padding: 10px 0;
  color: #757575;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
`;

export const ApplyTextContainer = styled.div`
  ${({ seller }) =>
    seller &&
    css`
      margin-left: 70px;
    `}

  ${({ buyer }) =>
    buyer &&
    css`
      margin-right: 70px;
    `}
`;

export const ApplyDisplay = styled.div`
  display: flex;
  align-items: center;
  padding: 2em 0;

  ${({ seller }) =>
    seller &&
    css`
      width: 90%;
      margin: auto 0 auto auto;
    `}

  ${({ buyer }) =>
    buyer &&
    css`
      width: 95%;
    `}
`;