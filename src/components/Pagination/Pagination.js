import React from 'react';
import styled from "styled-components";
import {Pagination as AntdPagination} from 'antd';

const Pagination = (props) => {
    const {
        defaultCurrent = 1,
        total,
    } = props;

    return (
        <Wrapper>
            <AntdPagination defaultCurrent={defaultCurrent} total={total}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Pagination;