import styled from "styled-components";

const HalfWrap = styled.div`
  display: flex;
  //flex-grow: 1;
  width: 100%;
  align-items: center;
  > * {
    margin: 0 ${(props) => props.gutter}px;
    &:first-child {
      margin-left: 0;
    }
  }
`;

export default HalfWrap;
