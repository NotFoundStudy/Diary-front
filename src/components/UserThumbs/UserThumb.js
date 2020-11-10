import React from "react";
import styled from "styled-components";

const UserThumb = (props) => {
  const { name, src } = props;

  return (
    <Wrapper>
      <Thumb src={src} />
      <Name>{name}</Name>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Thumb = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 10px;
`;

const Name = styled.div`
  margin-top: 4px;
  font-weight: 700;
  color: #fff;
`;

export default UserThumb;
