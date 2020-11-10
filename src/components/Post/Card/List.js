import React from "react";
import styled from "styled-components";
import Pagination from "../../Pagination/Pagination";
import SearchBar from "../../SearchBar/SearchBar";
import Card from "./Card";
import { Col, Row } from "antd";

const List = (props) => {
  const { list } = props;

  return (
    <Wrapper>
      <SearchBar />
      <Row gutter={16} justify={"center"}>
        {list.map((item) => (
          <Col span={6}>
            <Card key={item.id} item={item} />
          </Col>
        ))}
      </Row>
      <Pagination />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default List;
