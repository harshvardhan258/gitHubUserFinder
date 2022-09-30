import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //search user
  const searchUsers = async (text) => {
    setLoading();
    let response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    
    dispatch({type:SEARCH_USERS,payload:response.data.items})
  };

  //get user
  const getUser=async (username) => {
    setLoading( );
    let response = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({type:GET_USER,payload:response.data})
  }

  //get repos
  const getRepo=async (username) => {
    setLoading( );
    let response = await axios.get(
      `https://api.github.com/users/${username}/repos?
      per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(response.data)
    dispatch({type:GET_REPOS,payload:response.data});
  }

  //clear users
  const clearUsers = () => dispatch({type:CLEAR_USERS,payload:[]})

  //set loading
  const setLoading=()=> dispatch({type:SET_LOADING});

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        setLoading,
        clearUsers,
        getUser,
        getRepo
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
