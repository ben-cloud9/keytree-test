import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IRepo } from '../../store/types/types';
import github from '../../github-api/github-api';
import { setRepoList, setLoading, setError } from '../../store/actions/actions';

import './RepoList.scss';
import RepoListItem from './RepoListItem';

interface IRepoListProps {
    repoList: IRepo[];
    loading: boolean;
    error: string;
    setRepoList(RepoList: IRepo[]): any;
    setLoading(loading: boolean): any;
    setError(error: string): any;
    renderList: boolean;
    searchTerm: string;
}
export class RepoList extends Component<Partial<IRepoListProps>> {
    renderList() {
        console.log(!!this.props.repoList && this.props.repoList.length > 0 && this.props.loading === false);
        
        return ;
    }
    async componentDidMount() {
        try {
            const repoListData = await github.getRepos('ben-cloud9');
            if (this.props.setRepoList && this.props.setLoading) {
                this.props.setRepoList(repoListData);
                return this.props.setLoading(false);
            }

            throw new Error('please ensure you have provided a method to setRepoList and setLoading props');
        } catch (err) {
            if (this.props.setError) {
                return this.props.setError(err.message);
            }

            throw Error(err);
        }
    }
    render() {
        return (
            <div>
                {this.props.renderList && (
                    <div>
                        <h2>Returned Repositories</h2>
                        {this.props.repoList && this.props.repoList.map((repo) => <RepoListItem repo={repo} key={repo.name}/>)}
                    </div>
                )}
                {!this.props.searchTerm && (
                    <div>
                        <h2 className="repo-list__message">Please enter a search term</h2>
                    </div>
                )}
                {this.props.loading === true && (
                    <p>Loading...</p>
                )}
                {!!this.props.error && (
                    <div className="error-message">
                        <h2>Oops!</h2>
                        <p>Something's gone wrong, please try again.</p>
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
    setError: (error: string) => dispatch(setError(error))
});

export default connect<Partial<IRepoListProps>, IMapDispatchToProps, undefined, IRepoListProps>(mapStateToProps, mapDispatchToProps)(RepoList);
