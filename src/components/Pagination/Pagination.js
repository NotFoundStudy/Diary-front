import React, { useEffect } from "react";
import styled from "styled-components";
import { Pagination as AntdPagination } from "antd";

const Pagination = (props) => {
  const { total, onShowSizeChange = true, style } = props;

  useEffect(() => {
    // 새로고침 시 url에서 page='' 가져와서 current 넣기
    // const url2 = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/search?q=123&page?=12');
    const url2 = new URL(window.location.href);
    console.log(url2.search);
  }, []);

  return (
    <Wrapper style={style}>
      <AntdPagination
        defaultCurrent={1}
        total={total}
        onShowSizeChange={onShowSizeChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

export default Pagination;
