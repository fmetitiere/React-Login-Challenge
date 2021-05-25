import React from "react";
import BackgroundAnimation from "../BackgroundAnimation";
import { Content } from "./style";

export default function WebLayout({ children }) {
  return (
    <BackgroundAnimation>
      <Content>{children}</Content>
    </BackgroundAnimation>
  );
}
