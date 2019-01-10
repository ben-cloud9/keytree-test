
import { IState, IAction } from '../types/types';

const defaultState: IState = {
    error: undefined,
    loading: false,
    repoList: [],
    searchTerm: ''
};

const defaultAction: IAction = {
    type: '@@INIT'
}

export default (state: IState = defaultState, action: IAction = defaultAction): IState => {
    switch (action.type) {

        case 'SET_REPO_LIST': 
            return {
                ...state,
                repoList: action.repoList
            };

        case 'SET_LOADING':
            return {
                ...state,
                loading: action.loading
            }

        case 'SET_ERROR': 
            return {
                ...state,
                error: action.error
            }

        case 'SET_SEARCH_TERM':
            return {
                ...state,
                searchTerm: action.searchTerm
            }

        default:
            return state;
    }
}
