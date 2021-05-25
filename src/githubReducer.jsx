const initialState = {
  userName: "Fernando",
  users: [],
};

export const UserNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_USER":
      return {
        ...state,
        userName: action.name,
      };

    case "LIST_USER":
      return {
        ...state,
        users: [
          {
            login: "foo",
            id: 33384,
            type: "User",
            site_admin: false,
            score: 1.0,
          },
          {
            login: "fool2fish",
            id: 340282,
            type: "User",
            site_admin: false,
            score: 1.0,
          },
          {
            login: "foosel",
            id: 83657,
            type: "User",
            site_admin: false,
            score: 1.0,
          }
        ]
      };

    default:
      return state;
  }
};
