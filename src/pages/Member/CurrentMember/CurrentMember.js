import React, { useEffect, useState } from "react";
import styled from "styled-components";
import List from "../../../components/Post/PhotoPost/List";
import { mock } from "../../../mock/mock";
import PageTitle from "../../../components/Titles/PageTitle";
import { Col, Radio, Row } from "antd";
import { appCreators } from "../../../redux/actionCreators";
import Loading from "../../../components/Loading/Loading";
import Post from "../../../components/Post/PhotoPost/Post";
import Pagination from "../../../components/Pagination/Pagination";
import Sidebar from "../../../components/Layout/Sidebar/Sidebar";
import Detail from "../../../components/Post/PhotoPost/Detail";

let list; // for mock

// sidebar
const sideMenu = {
  head: "current member",
  list: [
    {
      key: "/currentMember",
      icon: "",
      name: "Current Member",
      sub_menu: [],
    },
    {
      key: "/alumni",
      icon: "",
      name: "Alumni",
      sub_menu: [],
    },
  ],
};
const CurrentMember = (props) => {
  useEffect(() => {
    // fetch current
    list = mock.member.currentMember;
  }, []);

  if (!list) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {/*<Radio.Group*/}
      {/*    defaultValue="currentMember"*/}
      {/*    onChange={(e) => {*/}
      {/*        if (e.target.value === 'currentMember') {*/}
      {/*            // only never fetched, fetch. by comparing whether store's list is null, also pagination changed check,*/}
      {/*            // if(!store.members.current){*/}
      {/*            //     dispatch()*/}
      {/*            // }*/}
      {/*            list = mock.member.currentMember.list;*/}
      {/*        }*/}
      {/*        if (e.target.value === 'alumni') {*/}
      {/*            // only never fetched, fetch. by comparing whether store's list is null, also pagination changed check*/}
      {/*            // if(!store.members.alumni){*/}
      {/*            //     dispatch()*/}
      {/*            // }*/}
      {/*            list = mock.member.alumni.list;*/}
      {/*        }*/}
      {/*    }}>*/}
      {/*    <Radio.Button value="currentMember">Current Member</Radio.Button>*/}
      {/*    <Radio.Button value="alumni">Alumni</Radio.Button>*/}
      {/*</Radio.Group>*/}

      <Row gutter={34} justify={"center"}>
        <Col flex={"100px"}>
          <Sidebar list={sideMenu} />
        </Col>
        <Col style={{ flexGrow: 1 }}>
          <PageTitle title={"current member"} />
          <List list={list} />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-radio-group {
    margin-bottom: 20px;
  }
`;

export default CurrentMember;
