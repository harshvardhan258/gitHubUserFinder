import { Fragment } from "react";
import RepoItem from "./RepoItem";
import PropTypes from 'prop-types';

const Repo = ({ Repos }) => {
  return (
    <Fragment>
      <ul>
        {Repos.map((repo) => (
          <li>
            <RepoItem repo={repo} key={repo.id}/>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

Repo.proptype={
    Repos:PropTypes.array.isRequired
}

export default Repo;
