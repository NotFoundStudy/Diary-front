import styled from "styled-components";
import Button from "./Button";

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.left &&
    `
        justify-content: flex-start;
    `};

  ${(props) =>
    props.center &&
    `
        justify-content: center;
    `};

  ${(props) =>
    props.right &&
    `
        justify-content: flex-end;
    `};
  ${(props) =>
    props.gutter &&
    `
        > * {
            margin-left: ${props.gutter}px;
            &:first-child {
                margin-left: 0;
            }
        }
    `};
`;

export const BorderButton = styled(Button)`
  background-color: #fff;
  color: ${(props) => props.color || "#08c"};
  &:hover,
  &:focus {
    background-color: ${(props) => props.color || "#08c"};
    color: #fff;
  }
`;
