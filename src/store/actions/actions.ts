import { IAction } from '../types/types';
import github from '../../github-api/github-api';

type IRepoList = any;

export const setRepoList = (repoList: IRepoList = []): IAction => {
    return {
        type: 'SET_REPO_LIST',
        repoList
    }
};

export const setLoading = (loading: boolean): IAction => {
    return {
        type: 'SET_LOADING',
        loading
    }
}


export const setError = (error: string): IAction => {
    return {
        type: 'SET_ERROR',
        error
    }
}

export const setSearchTerm = (searchTerm: string): IAction => {
    return {
        type: 'SET_SEARCH_TERM',
        searchTerm
    }
}
