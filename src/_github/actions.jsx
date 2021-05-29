import axios from "axios";

export const fetchUsers = (login, order) => async (dispatch, getState) => {
  dispatch(fetchUsersRequest());

  const nextPage = getState().currentPage;

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${login}&page=1&per_page=9&sort=joined&sort=joined&order=${order}`
    );

    dispatch(
      fetchUsersSuccess(
        response.data.items,
        login,
        response.data.total_count,
        nextPage
      )
    );
  } catch (error) {
    dispatch(fetchUsersFailure(error));
  }
};

export const nextPage = () => async (dispatch, getState) => {
  dispatch(fetchUsersRequest());

  const nextPage = getState().currentPage + 1;
  const userName = getState().userName;
  const order = getState().order;


  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${userName}&page=${nextPage}&per_page=9&sort=joined&order=${order}`
    );

    dispatch(setCurrentPage(nextPage));
    dispatch(
      fetchUsersSuccess(
        response.data.items,
        userName,
        response.data.total_count,
        nextPage,
        order
      )
    );
  } catch (error) {
    dispatch(fetchUsersFailure(error));
  }
};

export const previousPage = () => async (dispatch, getState) => {
  dispatch(fetchUsersRequest());

  const previousPage = getState().currentPage - 1;
  const userName = getState().userName;
  const order = getState().order;


  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${userName}&page=${previousPage}&per_page=9&sort=joined&order=${order}`
    );

    dispatch(setCurrentPage(previousPage));
    dispatch(
      fetchUsersSuccess(
        response.data.items,
        userName,
        response.data.total_count,
        previousPage,
        order
      )
    );
  } catch (error) {
    dispatch(fetchUsersFailure(error));
  }
};


const fetchUsersRequest = () => {
  return { type: "FETCH_USERS_REQUEST" };
};

const fetchUsersSuccess = (items, userName, totalCount, currentPage, order) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: { items, userName, totalCount, currentPage, order },
  };
};

const fetchUsersFailure = (error) => {
  return { type: "FETCH_USERS_FAILURE", error };
};

export const setCurrentPage = (currentPage) => {
  return { type: "SET_CURRENT_PAGE", payload: currentPage };
};

export const clearUSERS = () => {
  return {
    type: "FETCH_USERS_CLEAR",
  };
};
