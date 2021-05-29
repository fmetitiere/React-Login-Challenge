const initState = {
  items: [],
  loading: false,
  error: null,
  currentPage: 1,
  userName: undefined,
  totalCount: 0,
  order: "",
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload.items,
        userName: action.payload.userName,
        totalCount: action.payload.totalCount,
        currentPage: action.payload.currentPage,
      };
    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "FETCH_USERS_CLEAR":
      return {
        ...state,
        loading: false,
        error: null,
        items: [],
        totalCount: 0,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
