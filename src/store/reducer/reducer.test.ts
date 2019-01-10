import reducer from './reducer';
import { IRepo, IAction } from '../types/types';
const mockResponses: IRepo[] = require('../../../cypress/fixtures/mock-responses.json');

it('should set default state', () => {
    const expectedDefaultState = {
        error: undefined,
        loading: false,
        repoList: [],
        searchTerm: ''
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
        loading: false,
        repoList: mockResponses,
        searchTerm: ''
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
        searchTerm: ''
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
        loading: false,
        repoList: [],
        searchTerm: ''
    }

    const actualState = reducer(undefined, validActionObject);

    expect(actualState).toEqual(expectedState);
});

it('should set search term', () => {
    const validActionObject = {
        type: 'SET_SEARCH_TERM',
        searchTerm: 'this-is-a-search-term'
    }

    const expectedState = {
        error: undefined,
        loading: false,
        repoList: [],
        searchTerm: validActionObject.searchTerm
    }

    const actualState = reducer(undefined, validActionObject);

    expect(actualState).toEqual(expectedState);
});