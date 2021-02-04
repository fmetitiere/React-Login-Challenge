import React from "react";

import Banner from "../_components/Banner";
import { BannerHome, HomeMenuData } from "../_messages";


export default function Home() {
  return (
    <Banner
      bannerData={BannerHome}
      title1={HomeMenuData.bannerTitle1}
      title2={HomeMenuData.bannerTitle2}
      text={HomeMenuData.bannerText}
    />
  );
}
