import React, { useEffect } from "react";
import styled from "styled-components";
import { Collapse, Table, Tabs } from "antd";
import PublicationItems from "./components/PublicationItems";
import { mock } from "../../mock/mock";
import PageTitle from "../../components/Titles/PageTitle";
import { appCreators } from "../../redux/actionCreators";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const tabFrame = [
  {
    key: 1,
    title: "논문",
  },
  {
    key: 2,
    title: "단행본",
  },
  {
    key: 3,
    title: "학술회의참가",
  },
  {
    key: 4,
    title: "특허출원 및 등록",
  },
  {
    key: 5,
    title: "전시발표창작",
  },
  {
    key: 6,
    title: "학술상등 수상사항",
  },
  {
    key: 7,
    title: "초청강연",
  },
];

const Publication = (props) => {
  const list = mock.publication[0].data;

  useEffect(() => {
    appCreators.setSideMenu("Publication");
  }, []);

  return (
    <Wrapper>
      <PageTitle title={"Publication"} />
      <PublicationItems item={list[0]} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Publication;
