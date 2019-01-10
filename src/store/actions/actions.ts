import { IAction } from '../types/types';

type IRepoList = any;

export const setRepoList = (repoList: IRepoList = []): IAction => {
    return {
        type: 'SET_REPO_LIST',
        repoList
    }
};
