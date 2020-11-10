import React from "react";
import styled from "styled-components";
import { Collapse, Table } from "antd";

const { Panel } = Collapse;

const PublicationItems = (props) => {
  const { description, item } = props;

  // const item = mock.publication[0].data[0];

  return (
    <Wrapper>
      <Title>{item.published_year} YEARS</Title>
      <Desc>
        <span className="bold">{item.description}</span>
        <span>
          {item.reference}
          {item.published_year}
        </span>
      </Desc>
      <StyledCollapse defaultActiveKey={["1"]} ghost>
        <Panel header="공동저자정보" key="1">
          <Table
            dataSource={item.authors}
            columns={[
              {
                title: "No.",
                dataIndex: "index",
                key: "index",
                render: (text, record, index) => <div>{index + 1}</div>,
              },
              {
                title: "성명",
                dataIndex: "name",
                key: "name",
              },
              {
                title: "직급명",
                dataIndex: "position",
                key: "position",
              },
              {
                title: "대학",
                dataIndex: "university",
                key: "university",
              },
              {
                title: "학과",
                dataIndex: "major",
                key: "major",
              },
              {
                title: "연구원구분",
                dataIndex: "role",
                key: "role",
              },
              {
                title: "참여구분",
                dataIndex: "role_number",
                key: "role_number",
              },
            ]}
            pagination={false}
            align={"center"}
          />
        </Panel>
      </StyledCollapse>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & + & {
    border-top: 1px solid #ddd;
  }
`;

const Title = styled.div`
  padding: 15px 15px;
  background: #356fcc;
  font-size: 17px;
  font-weight: 600;
  color: #fff;
`;

const Desc = styled.div`
  padding: 10px 0;
  span {
    line-height: 1.2;
    font-size: 14px;
    font-weight: 400;
    color: #000;
    & + & {
      margin-left: 5px;
    }
    &.bold {
      font-size: 15px;
      font-weight: 600;
    }
  }
`;

const StyledCollapse = styled(Collapse)`
  .ant-collapse-header {
    color: #356fcc;
  }
`;

export default PublicationItems;
