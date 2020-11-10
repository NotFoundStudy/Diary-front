import React from "react";
import styled from "styled-components";
import List from "./List";
import BackButton from "../../Button/BackButton";
import { Col, Row } from "antd";
import Attachment from "../components/Attachment";
import PostTitle from "../components/PostTitle";

const Detail = (props) => {
  const { item, list } = props;

  return (
    <Wrapper>
      <DetailWrap>
        <PostTitle item={item} />
        <ContentBody>asdf</ContentBody>
        <Attachment list={item.attachment} />
        <BackButton />
      </DetailWrap>
      <List list={list} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentBody = styled.div`
  padding: 30px 0;
`;

export default Detail;
