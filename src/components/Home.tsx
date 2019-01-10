import React from 'react';
import './Home.scss';
import RepoList from './repo-list/RepoList';

const Home = () => (
    <div className="container">
        <h1>Github Repo Search</h1>
        <RepoList />
    </div>
);

export default Home;
