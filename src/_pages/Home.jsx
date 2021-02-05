import React from "react";

import Banner from "../_components/Banner";
import Section from "../_components/Section";
import { BannerHome, HomeMenuData } from "../_messages";


export default function Home() {
  return (
    <>
    <Banner
      bannerData={BannerHome}
      title1={HomeMenuData.bannerTitle1}
      title2={HomeMenuData.bannerTitle2}
      text={HomeMenuData.bannerText}
    />
    <Section grey title1="ADVERTISE" title2="WITH US">
      
    </Section>
    <Section primary title1="DRIVE" title2="WITH US">
      
    </Section>
    <Section  white title1="GALLERY">
      
    </Section>
    </>
  );
}
