import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, previousPage } from "../_github/actions";

const Users = () => {
  
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const renderPosts = () => {
    if (state.loading) {
      return <h1>Loading</h1>;
    }

    if (state.error) {
      return <h1>Rate limit exceeded</h1>;
    }

    return state.items.map((e) => {
      return <h3>{e.login}</h3>;
    }); 
  };

  return (
    <div>
      
      {renderPosts()} 

      { state.currentPage >= 2 && <><button onClick={() => dispatch(previousPage())}>Back</button></> }

      { state.currentPage*9 < state.totalCount && <><button onClick={() => dispatch(nextPage())}>Next</button></> }

      
      <h1>{state.currentPage}</h1>
        
      <h1>{state.totalCount}</h1>

    </div>
  );
};

export default Users;
