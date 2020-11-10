import React from "react";
import styled from "styled-components";
import Menu from "../../Menu/Menu";

const SideMenu = (props) => {
  const { menu } = props;

  return (
    menu && (
      <>
        <MenuHead>{menu.head}</MenuHead>
        <StyledMenu mode={"inline"} subMenuOpenDelay={0} list={menu.list} />
      </>
    )
  );
};

const StyledMenu = styled(Menu)`
  &.ant-menu {
    border-right: initial;
    &.ant-menu-sub {
      > li {
        padding-top: 10px;
        padding-bottom: 10px;
        color: #6c6c6c;
      }
    }
    .ant-menu-submenu-inline > .ant-menu-submenu-title {
      .ant-menu-submenu-arrow::before,
      .ant-menu-submenu-arrow::after {
        background: #999;
      }
    }
    li {
      // ant-menu-item
      height: 55px;
      margin: 0;
      line-height: 55px;
      font-size: 16px;
      font-weight: 400;
      color: #484848;
      border-bottom: 1px solid #f1f1f1;
      &:first-child {
        border-top: 1px solid #f1f1f1;
      }
    }
  }
`;
const MenuHead = styled.div`
  padding: 20px 10px;
  background: #094c90;
  text-transform: capitalize;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: #fff;
`;
export default SideMenu;
