import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { nextPage, previousPage } from "../_github/actions";
import { Loader, P, H2, Button } from "../_components/_styles";

import UserItem from "../_components/UserItem";

const UserHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-column-gap: 1rem;
  margin-bottom: 0.5rem;
  width: 25rem;
`;

const UsersBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const Users = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const renderPosts = () => {
    if (state.loading) {
      return <Loader />;
    }

    if (state.error) {
      return <H2 bold>Rate limit exceeded</H2>;
    }

    return state.items.map((e) => {
      return (
        <>
          <UserItem avatar={e.avatar_url} login={e.login} item={e.type} />
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
        </UserHeader>
      )}
      {renderPosts()}

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
