import React from 'react';
import styled from "styled-components";
import { Input,Select } from 'antd';

const { Option } = Select;
const { Search } = Input;

const SearchBar = (props) => {

    const onSearch = value => console.log(value);
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Wrapper>
            {/* Form - Zhejiang 검색하여 대체 */}
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default SearchBar;