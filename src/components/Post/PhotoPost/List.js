import React from 'react';
import styled from "styled-components";
import Post from "./Post";
import {Pagination} from "antd";

const List = (props) => {
    const {
        list,
    } = props;

    return (
        <Wrapper>
            {
              list.map(item => <Post key={item.id} item={item}/>)
            }
            <Pagination defaultCurrent={1} total={50} />
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default List;