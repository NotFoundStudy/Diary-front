import React, { useEffect } from "react";
import styled from "styled-components";
import { Divider } from "antd";

const Detail = (props) => {
  const { item } = props;

  useEffect(() => {
    // url catch for refresh
    // fetch by item.id
  }, []);

  return (
    <Wrapper>
      <Top>
        <Thumb src={item.thumbnail} />
        <Desc>
          <p className={"title"}>{item.name}</p>
          <section>
            <div className="p-group">
              <p>
                <span className={"key dot"}>직위(직급)</span>
                <span>{item.position}</span>
              </p>
              <p>
                <span className={"key dot"}>전화번호</span>
                <span>{item.phone}</span>
              </p>
              <p>
                <span className={"key dot"}>휴대전화번호</span>
                <span>{item.mobile}</span>
              </p>
            </div>

            <div className="p-group">
              <p>
                <span className={"key dot"}>이메일</span>
                <span>{item.email}</span>
              </p>
              <p>
                <span className={"key dot"}>사이트</span>
                <span>{item.website}</span>
              </p>
              <p>
                <span className={"key dot"}>연구분야</span>
                <span>{item.field}</span>
              </p>
            </div>
          </section>
        </Desc>
      </Top>
      <Body>
        <Divider orientation="left">세부내용</Divider>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Body = styled.div`
  margin-top: 15px;
`;

const Thumb = styled.img`
  width: 110px;
  height: 130px;
  margin-right: 16px;
`;
const Desc = styled.div`
  flex-grow: 1;
  p {
    margin: 0;
    &.title {
      margin-bottom: 5px;
      padding-left: 6px;
      font-size: 15px;
      font-weight: 600;
      color: #133183;
    }
  }
  span {
    font-size: 14px;
    color: #848484;
    &.key {
      padding-right: 10px;
      font-weight: 600;
      color: #000;
    }
    &.dot {
      position: relative;
      padding-left: 8px;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 2px;
        height: 2px;
        background: #525252;
      }
    }
  }
  section {
    display: flex;
    .p-group {
      width: 50%;
    }
  }
`;

export default Detail;
