import React from "react";
import styled from "styled-components";
import { AiFillFolderOpen } from "react-icons/all";

const Page404 = (props) => {
  return (
    <Wrapper>
      <AiFillFolderOpen size={55} style={{ marginBottom: "10px" }} />
      해당 페이지가 없습니다.
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;

  font-size: 21px;
  font-weight: 400;
  color: #c1c1c1;
`;

export default Page404;
