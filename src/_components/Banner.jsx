import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";

import { H2, P } from "../_components/_styles";

function changeBackground({ imgPath }) {
  return imgPath ? `background:url(${imgPath});` : "";
}

export const Item = styled.div`
  height: 600px;
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: center !important;
  background: url({Car});
  ${changeBackground}
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 16rem;
  p{
    width:30%;
  }
`;

export const Info = styled.div`
  width: 1170px;
  margin: 0 auto;
`;

function BannerItem({ imgPath }) {
  return <Item imgPath={imgPath} />;
}

export default function Banner({ bannerData, title1, title2, text }) {
  return (
    <>
      <Carousel>
        {bannerData.map((element) => (
          <BannerItem imgPath={element.image} />
        ))}
      </Carousel>
      <Wrapper>
        <Info>
          <H2 upper bold contrast>{title1}</H2>
          <H2 secondary contrast>{title2}</H2>
          <P contrast>{text}</P>
        </Info>
      </Wrapper>
    </>
  );
}
