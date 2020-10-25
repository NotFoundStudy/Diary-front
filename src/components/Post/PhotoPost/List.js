import React from 'react';
import styled from "styled-components";
import Post from "./Post";
import Pagination from "../../Pagination/Pagination";


const List = (props) => {
    const {
        list,
    } = props;

    return (
        <Wrapper>
            {
              list.map(item => <Post key={item.id} item={item}/>)
            }
            <Pagination current={1}
                        total={50}
                        onShowSizeChange={true}
                        style={{marginTop: '30px'}}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default List;