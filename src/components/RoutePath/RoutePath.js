import React from 'react';
import styled from "styled-components";
import {Breadcrumb} from "antd";
import {GoLocation} from "react-icons/all";

const RoutePath = (props) => {

    const {
        list = [
            {
                to: '/introduction',
                name: 'Introduction',
            },
            {
                to: '/people',
                name: 'People',
            },
            {
                to: '/currentMember',
                name: 'Current Member',
            },
        ]
    } = props;

    return (
        <Wrapper>
            <Breadcrumb separator=''>
                <Breadcrumb.Item>
                    <GoLocation/>
                </Breadcrumb.Item>
                {
                    list.map(item => <Breadcrumb.Item key={item.to}>
                            <a href={item.to}>{item.name}</a>
                        </Breadcrumb.Item>
                    )
                }
            </Breadcrumb>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  background:#f1f1f1;
  .ant-breadcrumb {
    font-size: 0;
    > span { // .ant-breadcrumb span span.ant-breadcrumb-link a
      .ant-breadcrumb-link {
         display: inline-block;
         vertical-align: middle;
         border-right: 1px solid #dedede;               
         padding: 12px 18px;
         a {
           font-size: 17px;
           color:#676767;
         }
      }
      &:first-child{
        .ant-breadcrumb-link{
          padding: 12px 7px;
          font-size: 17px;
          border-left: 1px solid #dedede;               
          svg{
            position: relative;
            top: 2px;
          }
        }
      }
      &:last-child .ant-breadcrumb-link a {
        color:#1d7fe2;
      }
    }
  }
`;

export default RoutePath;