import React from "react";
import BackgroundAnimation from "../BackgroundAnimation";

export default function WebLayout({ children }) {
  return (
    <BackgroundAnimation>
      <>{children}</>
    </BackgroundAnimation>
  );
}
