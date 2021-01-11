import React from "react";
import { Carousel } from "antd";

import styled from "styled-components";



function changeBackground({ imgPath }) {
  return imgPath ? `background:url(${imgPath});` : "";
}


export const Item = styled.div`
  height: 660px;
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: center !important;
  background: url({Car});
  ${changeBackground}
`;

function BannerItem({imgPath}){
  return(
    <Item imgPath={imgPath}/>
  )
}

export default function Banner({bannerData}) {
  return (
    <Carousel>
      {bannerData.map(element => <BannerItem imgPath={element.image}/>)}
    </Carousel>
  );
}
