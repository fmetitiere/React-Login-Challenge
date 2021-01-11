import React from "react";

import Banner from '../_components/Banner';
import { BannerHome } from "../_messages";


export default function Home() {
  return (
    <Banner bannerData={BannerHome}/>
  );
}