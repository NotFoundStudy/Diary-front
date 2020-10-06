import React from 'react';
import styled from "styled-components";
import {BsThreeDots} from "react-icons";
import {navigate} from "../../helper/historyHelper";

const ButtonMore = (props) => {

    const {
        align, // center: flex-enter,  end: flex-end
        options,
    } = props;

    return (
        <Wrapper>
            <BsThreeDots/>
            <Menu>
                {
                    options.map(item =>
                        <MenuItem onClick={() => navigate(item.url)}>{item.name}</MenuItem>
                    )
                }
            </Menu>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  justify-self: align;
  cursor:pointer;
`;

const Menu = styled.div`
`;

const MenuItem = styled.div`
`;

export default ButtonMore;