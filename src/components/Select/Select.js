import React from 'react';
import styled from "styled-components";
import {Select as AntdSelect} from 'antd';

const {Option} = AntdSelect;

const Select = (props) => {

    const {
        options,
        defaultValue,
        onChange,
        style,
    } = props;

    return (
        <StyledSelect defaultValue={defaultValue} style={style} onChange={onChange}>
            {
                options.map(item =>
                    <Option value={item.value} key={item.value}>{item.name}</Option>
                )
            }
        </StyledSelect>
    )
};

const StyledSelect = styled(AntdSelect)`
  width: 120px;
  font-size: 12px;
  ${props => props.style && {...props.style}};
`;

export default Select;