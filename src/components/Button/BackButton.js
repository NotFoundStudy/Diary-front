import React from "react";
import styled, { css } from "styled-components";
import Button from "./Button";
import HISTORY from "../../helper/historyHelper";

const BackButton = (props) => {
  const { text = "뒤로가기" } = props;

  return <Wrapper onClick={() => HISTORY.goBack()}>{text}</Wrapper>;
};

const Wrapper = styled(Button)`
  ${(props) => props.style1 && css``}
`;

export default BackButton;
