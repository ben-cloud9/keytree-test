import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IRepo } from '../../store/types/types';
import github from '../../github-api/github-api';
import { setRepoList, setLoading, setError, setSearchTerm } from '../../store/actions/actions';

import './RepoList.scss';
import RepoListItem from './RepoListItem';

interface IRepoListProps {
    repoList: IRepo[];
    loading: boolean;
    error: string;
    setRepoList(RepoList: IRepo[]): any;
    setLoading(loading: boolean): any;
    setError(error: string): any;
    setSearchTerm(searchTerm: string): any;
    renderList: boolean;
    searchTerm: string;
}
export class RepoList extends Component<Partial<IRepoListProps>> {
    constructor(props: Partial<IRepoListProps>) {
        super(props);
        this.getRepoListData = this.getRepoListData.bind(this);
        this.setLoading = this.setLoading.bind(this);
    }

    async getRepoListData() {
        try {
            this.setLoading(true);

            const repoListData = await github.getRepos(this.props.searchTerm);
            if (this.props.setRepoList && this.props.setSearchTerm && this.props.setError) {
                this.props.setRepoList(repoListData);
                this.props.setSearchTerm('');
                this.props.setError('');
                this.setLoading(false);
                return this.scrollToTopOfList()
            }

            throw new Error('please ensure you have provided a method to setRepoList and setLoading props');
        } catch (err) {
            if (this.props.setRepoList) {
                this.props.setRepoList([]);
            }

            if (this.props.setSearchTerm) {
                this.props.setSearchTerm('');
            }

            if (this.props.setError) {
                if (err.response.status === 403) {
                    this.props.setError('You have exceed the github API rate limit, please try again later');
                } else if (err.response.state === 404) {
                    this.props.setError(`Unable to find GitHub data for search term: '${this.props.searchTerm}'`);    
                } else {
                    this.props.setError(`Unknown error - unable to retreive GitHub data for search term: '${this.props.searchTerm}'`);
                }
            }
            this.setLoading(false);
        }
    }

    scrollToTopOfList() {
        const top = document.querySelector('#repo-list')!.getBoundingClientRect().top;
        window.scrollTo({ left: 0, top, behavior: 'smooth' });
    }

    setLoading(loading: boolean) {
        if (this.props.setLoading) {
            this.props.setLoading(loading);
        }
    }

    async componentDidUpdate() {
        if (!!this.props.searchTerm) {
            await this.getRepoListData();
        }
    }

    render() {
        return (
            <div id="repo-list">
                {this.props.renderList && (
                    <div>
                        <h2>Returned Repositories</h2>
                        {this.props.repoList && this.props.repoList.map((repo) => <RepoListItem repo={repo} key={repo.name} />)}
                    </div>
                )}
                {(!this.props.searchTerm && !this.props.renderList && !this.props.error) && (
                    <div>
                        <h2 className="repo-list__message">Search results will display here...</h2>
                    </div>
                )}
                {this.props.loading === true && (
                    <p>Loading...</p>
                )}
                {!!this.props.error && (
                    <div className="error-message">
                        <h2>Oops!</h2>
                        <p>{this.props.error}</p>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state: IRepoListProps) => ({
    error: state.error,
    repoList: state.repoList,
    loading: state.loading,
    searchTerm: state.searchTerm,
    renderList: !!state.repoList && state.repoList.length > 0 && state.loading === false
});


interface IMapDispatchToProps {
    setRepoList: (RepoList: IRepo[]) => any;
    setLoading: (loading: boolean) => any;
    setError: (error: string) => any;
}
const mapDispatchToProps = (dispatch: any) => ({
    setRepoList: (repoList: IRepo[]) => dispatch(setRepoList(repoList)),
    setLoading: (loading: boolean) => dispatch(setLoading(loading)),
    setError: (error: string) => dispatch(setError(error)),
    setSearchTerm: (searchTerm: string) => dispatch(setSearchTerm(searchTerm))
});

export default connect<Partial<IRepoListProps>, IMapDispatchToProps, undefined, IRepoListProps>(mapStateToProps, mapDispatchToProps)(RepoList);
