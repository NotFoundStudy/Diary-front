import React from "react";
import styled from "styled-components";

const PostTitle = (props) => {
  const { item } = props;

  return (
    <Wrapper>
      <Summary>
        <span className={"key"}>작성일</span>
        <span className={"value"}>{item.created_date}</span>
        <span className={"key"}>수정일</span>
        <span className={"value"}>{item.modified_date}</span>
        <span className={"key"}>작성자</span>
        <span className={"value"}>{item.author}</span>
        <span className={"key"}>조회수</span>
        <span className={"value"}>{item.hits}</span>
      </Summary>
      <Title>{item.title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Summary = styled.div`
  margin-bottom: 4px;
  span {
    font-size: 12px;
    font-weight: 400;
    color: #525252;
    &.key {
      margin-left: 10px;
      border-left: 1px solid #ddd;
      padding-left: 10px;
    }
    &.value {
      padding-left: 7px;
      font-weight: 600;
    }
    &:first-child.key {
      border-left: none;
    }
  }
`;

const Title = styled.div`
  padding: 10px 15px;
  border-top: 2px solid #000;
  background: #f1f1f1;
`;

export default PostTitle;
