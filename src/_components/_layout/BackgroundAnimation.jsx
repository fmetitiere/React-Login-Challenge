import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";

import * as animationData from "../_assets/animation/Background.json";

const BackgroundWrapper = styled.div`
>div:first-child{
    position absolute;
}
`;

const defaultOptions = {
  loop: true,
  autoplay: true,

  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

class Animation extends React.Component {
  componentWillMount() {
    this.setState({}, (_) => this.setSpeed());
    this.setState({}, (_) => this.setSegments());
  }
  setSpeed() {
    this.setState({ speed: 0 });
  }
  setSegments() {
    this.setState({ segments: 0 });
  }

  render() {
    return (
      <>
        <Lottie
          isClickToPauseDisabled={true}
          speed={0.3}
          options={defaultOptions}
          height={"100%"}
          width={"100%"}
        />
        {this.props.children}
      </>
    );
  }
}

function BackgroundAnimation({ children }) {
  return <BackgroundWrapper><Animation>{children}</Animation></BackgroundWrapper>;
}

export default BackgroundAnimation;
