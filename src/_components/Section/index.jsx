import React from "react";
import styled from "styled-components";

import { H1, P } from "../_styles";

function changeBackgroundColor({ primary, grey, white, theme }) {
  return (
    (primary && theme.primaryColor) ||
    (grey && theme.greyBackgroundColor) ||
    (white && "#fff")
  );
}

const Background = styled.div`
  background-color: ${changeBackgroundColor};
  padding: 4rem 0;
`;

const SectionComponent = styled.div`
  width: 1170px;
  margin: 0 auto;
`;

function changeStrongColor({primary, theme}){
    return(
        primary && "white" || theme.primaryColor
    )
}

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  strong {
    color: ${changeStrongColor};
  }
`;

const HR = styled.hr`
  border-color: ${changeStrongColor};
  width: 7rem;
`;

export default function Section({ title1, title2, children, primary, grey, white, ...props }) {
  return (
    <Background primary={primary} grey={grey} white={white}>
      <SectionComponent>
        <TitleContainer primary={primary}>
          <H1 contrast={primary}>
            {title1} <strong>{title2}</strong>
          </H1>
          <HR primary={primary}/>
        </TitleContainer>
        {children}
      </SectionComponent>
    </Background>
  );
}
