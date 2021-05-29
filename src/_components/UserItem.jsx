import React from "react";
import styled from "styled-components";

import { P } from "./_styles";
import Icon from "../_components/Icon";

const UserWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 1fr;
  grid-column-gap: 1rem;
  margin-bottom: 0.5rem;
  background: ${({ theme }) => theme.userBoxColor};
  padding: 0.5rem;
  border-radius: 1rem;
  width: 25rem;
  @media (max-width: 767px) {
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

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
`;

const UserItem = ({ avatar, login, item, url }) => {
  return (
    <>
      <UserWrapper>
        <img src={avatar} alt={login} />
        <P bold>{login}</P>
        <P>{item}</P>
        <LinkWrapper target="_blank" href={url}>
          <Icon name="eye" />
        </LinkWrapper>
      </UserWrapper>
    </>
  );
};

export default UserItem;
