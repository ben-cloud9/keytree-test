import React from 'react';
import './Home.scss';
import RepoList from './repo-list/RepoList';
import SearchForm from './search-form/SearchForm';

const Home = () => (
    <div className="container">
        <div>
            <img src="/github-logo.png" alt="Github logo" className="header-image"/>
            <h1 className="home-title">Github Repo Search</h1>
        </div>
        
        <SearchForm />
        <RepoList />
    </div>
);

export default Home;
