import React from 'react';
import styled from "styled-components";
import Pagination from "../../Pagination/Pagination";
import SearchBar from "../../SearchBar/SearchBar";
import Card from "./Card";

const List = (props) => {
    const {
        list
    } = props;

    return (
        <Wrapper>
            <SearchBar/>
            {
                list.map(item =>
                    <Card key={item.id} item={item}/>
                )
            }
            <Pagination/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default List;