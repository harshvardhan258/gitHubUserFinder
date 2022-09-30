import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repo from "../Repo/Repo";
import GithubContext from "../../context/github/GithubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getRepo } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getRepo(match.params.login);
  }, []);

  const {
    avatar_url,
    hireable,
    name,
    location,
    bio,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  // const { loading,Repos } = this.props;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      <span>
        Hireable :{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
      </span>
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location : {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers : {followers}</div>
        <div className="badge badge-success">Following : {following}</div>
        <div className="badge badge-danger">Public Repos : {public_repos}</div>
        <div className="badge badge-dark">Public Gists : {public_gists}</div>
      </div>

      <Repo Repos={repos} />
    </Fragment>
  );
};

export default User;
