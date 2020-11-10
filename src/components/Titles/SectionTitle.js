import React from "react";
import styled from "styled-components";

const SectionTitle = (props) => {
  const { title, color } = props;

  return <Wrapper color={color}>{title}</Wrapper>;
};

const Wrapper = styled.div`
  padding: 15px 0;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.color || "#fff"};
`;

export default SectionTitle;
