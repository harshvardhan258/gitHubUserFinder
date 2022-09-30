import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/GithubContext";

const Search = ({ alertMsg }) => {
  const githubContext = useContext(GithubContext);
  // state = {
  //   text: "",
  // };

  const [text, setText] = useState("");

  // static propTypes = {
  //   searchUser: PropTypes.func.isRequired,
  //   clearUsers: PropTypes.func.isRequired,
  //   showClearButton: PropTypes.bool.isRequired,
  //   alertMsg:PropTypes.func.isRequired
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertMsg({ msg: "Please Enter something", type: "light" });
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    //this.setState({ text: e.target.value });
    //this.setState({ [e.target.name]: e.target.value });
  };

  // render() {
  //   const {showClearButton,clearUsers}= this.props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={handleTextChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-primary btn-dark"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
  //}
};

Search.propTypes = {
  alertMsg: PropTypes.func.isRequired,
};

export default Search;
