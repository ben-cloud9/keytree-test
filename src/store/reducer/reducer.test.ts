import reducer from './reducer';
import { IRepo, IAction } from '../types/types';
const mockResponses: IRepo[] = require('../../../integration-tests/mock-responses.json');

it('should set default state', () => {
    const expectedDefaultState = {
        error: undefined,
        loading: true,
        repoList: [],
        searchTerm: 'ben-cloud9'
    }

    const actualDefaultState = reducer();

    expect(actualDefaultState).toEqual(expectedDefaultState);
});

it('should set repo list when called with valid option object', () => {
    const validActionObject: IAction = {
        type: 'SET_REPO_LIST',
        repoList: mockResponses
    }

    const expectedState = {
        error: undefined,
        loading: true,
        repoList: mockResponses,
        searchTerm: 'ben-cloud9'
    }

    const actualState = reducer(undefined, validActionObject);

    expect(actualState).toEqual(expectedState);
});

it('should set loading', () => {
    const validActionObject = {
        type: 'SET_LOADING',
        loading: false
    }

    const expectedState = {
        error: undefined,
        loading: false,
        repoList: [],
        searchTerm: 'ben-cloud9'
    }

    const actualState = reducer(undefined, validActionObject);

    expect(actualState).toEqual(expectedState);
});

it('should set error', () => {
    const validActionObject = {
        type: 'SET_ERROR',
        error: 'this-is-an-error'
    }

    const expectedState = {
        error: validActionObject.error,
        loading: true,
        repoList: [],
        searchTerm: 'ben-cloud9'
    }

    const actualState = reducer(undefined, validActionObject);

    expect(actualState).toEqual(expectedState);
})