import React from 'react';
import styled from "styled-components";
import {Col, Row} from "antd";

const Attachment = (props) => {
    const {
        list
    } = props;

    return (
        <Wrapper>
            <Col span={12}>첨부파일</Col>
            <Col span={12}>
                {/*{*/}
                {/*    list.map(file =>*/}
                {/*        <Link></Link>*/}
                {/*    )*/}
                {/*}*/}
                abc<br/>
                asdf<br/>
                asdf<br/>
                asff
            </Col>
        </Wrapper>
    )
};

const Wrapper = styled(Row)`
  border:1px solid #ddd;
  border-top:2px solid #000;
`;

const Link = styled.a`
`;
export default Attachment;