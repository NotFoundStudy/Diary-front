import React from "react";
import styled, { css } from "styled-components";
import Menu from "../../Menu/Menu";
import Container from "../Container/Container";
import Shortcuts from "./Shortcuts";

const menuList = [
  {
    key: "INTRODUCTION & RESEARCH",
    icon: "",
    name: "INTRODUCTION & RESEARCH",
    sub_menu: [
      {
        key: "/introduction",
        icon: "",
        name: "Introduction",
      },
      {
        key: "/research",
        icon: "",
        name: "Research",
      },
    ],
  },
  {
    key: "PROFESSOR",
    icon: "",
    name: "PROFESSOR",
    sub_menu: [
      {
        key: "/professor",
        icon: "",
        name: "Professor",
      },
    ],
  },
  {
    key: "MEMBER",
    icon: "",
    name: "MEMBER",
    sub_menu: [
      {
        key: "/member/current",
        icon: "",
        name: "Current Member",
      },
      {
        key: "/member/alumni",
        icon: "",
        name: "Alumni",
      },
    ],
  },
  {
    key: "/publication",
    icon: "",
    name: "PUBLICATION",
    sub_menu: [
      {
        key: "/publication",
        icon: "",
        name: "Publication",
      },
    ],
  },
  {
    key: "/lecture",
    icon: "",
    name: "LECTURE",
    sub_menu: [
      {
        key: "/lecture/1",
        icon: "",
        name: "1",
      },
      {
        key: "/lecture/2",
        icon: "",
        name: "2",
      },
    ],
  },
  {
    key: "/community",
    icon: "",
    name: "COMMUNITY",
    sub_menu: [
      {
        key: "/community/notice",
        icon: "",
        name: "Notice",
      },
      {
        key: "/community/gallery",
        icon: "",
        name: "Gallery",
      },
      {
        key: "/community/board",
        icon: "",
        name: "Board",
      },
    ],
  },
];
const shortcutList = [
  {
    to: "/home",
    name: "Home",
  },
  {
    to: "/register",
    name: "Register",
  },
  {
    to: "/login",
    name: "Login",
  },
];

const Navbar = (props) => {
  const { layout = "" } = props;

  return (
    <Wrapper layout={layout}>
      <Container style={{ position: "relative" }}>
        <div className="util-wrap">
          <Shortcuts list={shortcutList} />
        </div>
        <Menu list={menuList} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${(props) =>
    props.layout === "overlay" &&
    css`
      position: absolute;
      left: 0;
      right: 0;
      bottom: 50px;
      background: rgba(0, 0, 0, 0.43);
      .ant-menu {
        display: flex;
        border-bottom: initial;
        background: initial;
      }
      .ant-menu-submenu {
        flex-grow: 1;
        text-align: center;
        font-size: 19px;
        color: #fff;

        .ant-menu-item {
          // dropdown
          height: 44px;
          padding: 5px 0;
          text-align: center;
          line-height: 44px;
          font-size: 17px;
        }
      }
      .ant-menu-submenu-title {
        padding: 5px 0 !important;
      }
    `}

  .util-wrap {
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 60px;
    margin-right: 50px;
  }
`;

export default Navbar;
