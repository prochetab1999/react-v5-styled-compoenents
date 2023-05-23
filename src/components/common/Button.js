import styled, { css } from "styled-components";
const Button = styled.button`
  color: white;
  background-color: ${(props) =>
    props.secondary ? "black" : "#f8049c"}; //access the props in this way
  font-weight: bold;
  ${(props) =>
    props.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}; //css helper for putting bulk css
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    // for the disabled prop sent to the button
    background-color: #eee;
    color: #666;
  }
`;
export { Button };
