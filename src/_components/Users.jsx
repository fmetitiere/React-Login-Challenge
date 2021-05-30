import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { nextPage, previousPage } from "../_github/actions";
import { Loader, P, H2, Button } from "../_components/_styles";

import UserItem from "../_components/UserItem";

const UserHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 1fr;
  grid-column-gap: 1rem;
  margin-bottom: 0.5rem;
  0 1.4rem 0 0;
  width: 25rem;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const UsersBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UsersView = styled.div`
  overflow-y: scroll;
  height: 28rem;
  width: 100%;
  @media (max-width: 767px){
    height: 26rem;
  }
  @media (min-width: 768px) and (max-width: 1440px){
    height: 25rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
`;

const Users = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const renderPosts = () => {
    if (state.error) {
      return <H2 bold>Rate limit exceeded</H2>;
    }

    return state.items.map((e) => {
      return (
        <>
          <UserItem
            avatar={e.avatar_url}
            login={e.login}
            item={e.type}
            url={e.html_url}
          />
        </>
      );
    });
  };

  return (
    <UsersBody>
      {state.totalCount > 0 && (
        <UserHeader>
          <P>Avatar</P>
          <P>Login</P>
          <P>Type</P>
          <P>Link</P>
        </UserHeader>
      )}

      {state.loading && <Loader />}
      {state.totalCount > 1 && <UsersView>{renderPosts()}</UsersView>}

      <ButtonsWrapper>
        {state.currentPage >= 2 && (
          <Button onClick={() => dispatch(previousPage())}>Back</Button>
        )}
        {state.currentPage * 9 < state.totalCount && (
          <Button onClick={() => dispatch(nextPage())}>Next</Button>
        )}
      </ButtonsWrapper>
    </UsersBody>
  );
};

export default Users;
