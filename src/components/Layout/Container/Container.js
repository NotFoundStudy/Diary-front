import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = (props) => {
  const { children, style } = props;
  return <Wrapper style={style}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

Container.PropTypes = {
  children: PropTypes.element,
  style: PropTypes.func,
};

Container.defaultProps = {
  children: <></>,
  style: () => {},
};
export default Container;
