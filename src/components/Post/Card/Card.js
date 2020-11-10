import React from "react";
import styled from "styled-components";
import { Card as AntdCard } from "antd";

const { Meta } = AntdCard;

const Card = (props) => {
  return (
    <StyledCard
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </StyledCard>
  );
};

const StyledCard = styled(AntdCard)`
  margin: 0 auto;
`;

export default Card;
