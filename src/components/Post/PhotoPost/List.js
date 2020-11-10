import React, { useEffect } from "react";
import styled from "styled-components";
import Post from "./Post";
import Pagination from "../../Pagination/Pagination";
import { mock } from "../../../mock/mock";
import { navigate } from "../../../helper/historyHelper";

const List = (props) => {
  const { list = mock.member.currentMember } = props;

  useEffect(() => {
    // navigate('member/current?page=1&?pageSize=10');
  }, []);

  return (
    <Wrapper>
      {list?.list?.map((item) => (
        <Post key={item.id} item={item} />
      ))}
      <Pagination
        current={1}
        total={list.total}
        onShowSizeChanger
        onShowSizeChange={(current, pageSize) => {
          console.log("@@ current, pageSize", current, pageSize);
        }}
        style={{ marginTop: "30px" }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default List;
