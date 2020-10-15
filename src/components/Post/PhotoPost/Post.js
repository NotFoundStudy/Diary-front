import React from 'react';
import styled from "styled-components";
import {navigate} from "../../../helper/historyHelper";

const Post = (props) => {
    const {
        item,
    } = props;

    return (
        <Wrapper onClick={() => navigate(`/introduction/people/currentMember/${item.id}`)}>
            <Thumb src={item.thumbnail}/>
            <Desc>
                <p className={'title'}>{item.name}</p>
                <p>
                    <span className={'key dot'}>직위(직급)</span>
                    <span>{item.position}</span>
                </p>
                <p>
                    <span className={'key dot'}>연구분야</span>
                    <span>{item.field}</span>
                </p>
            </Desc>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  border-bottom:1px solid #ddd;
  cursor:pointer;
`;
const Thumb = styled.img`
  width: 110px;
  height: 130px;
  margin-right: 16px;
`;
const Desc = styled.div`
  flex-grow: 1;
  p{
    margin: 0;
    &.title{
      margin-bottom: 5px;
      padding-left: 6px;
      font-size: 15px;
      font-weight: 600;
      color:#133183;
    }
  }
  span{
    font-size: 14px;
    color:#848484;
    &.key{
      padding-right: 10px;
      font-weight: 600;
      color:#000;
    }
    &.dot{
      position: relative;
      padding-left: 8px;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 2px;
        height: 2px;
        background:#525252;
      }
    }
  }
`;

export default Post;