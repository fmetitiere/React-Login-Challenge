import React from "react";
import styled from "styled-components";

import { P } from "./_styles";

const UserWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-column-gap: 1rem;
  margin-bottom: 0.5rem;
  background: ${({ theme }) => theme.userBoxColor};
  padding: 0.5rem;
  border-radius: 1rem;
  width: 25rem;
  @media(max-width: 767px){
    width: 100%;
  }
  p {
    align-self: center;
  }

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
  }
`;

const UserItem = ({ avatar, login, item }) => {
  return (
    <>
      <UserWrapper>
        <img src={avatar} alt={login} />
        <P bold>{login}</P>
        <P>{item}</P>
      </UserWrapper>
    </>
  );
};

export default UserItem;
