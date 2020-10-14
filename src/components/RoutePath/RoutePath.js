import React from 'react';
import styled from "styled-components";
import {Breadcrumb} from "antd";

const RoutePath = (props) => {

    return (
        <Wrapper>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  background:#f1f1f1;
`;

export default RoutePath;