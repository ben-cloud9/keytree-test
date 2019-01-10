import { setRepoList, setLoading, setError, setSearchTerm } from './actions';
const mockRepoList = require('../../../cypress/fixtures/mock-responses.json');

it('should return correct action object with default params', () => {
    const expectedAction = {
        type: 'SET_REPO_LIST',
        repoList: []
    };

    const actualAction = setRepoList();
    expect(actualAction).toEqual(expectedAction);
});

it('shoudl return correct action object with valid repoList', () => {
    const expectedAction = {
        type: 'SET_REPO_LIST',
        repoList: mockRepoList
    }

    const actualAction = setRepoList(mockRepoList);
    expect(actualAction).toEqual(expectedAction);
});


it('should return correct action object with loading', () => {
    const expectedAction = {
        type: 'SET_LOADING',
        loading: false
    }

    const actualAction = setLoading(false);
    expect(actualAction).toEqual(expectedAction);
});

it('should return correct action object with valid error', () => {
    const expectedAction = {
        type: 'SET_ERROR',
        error: 'this-is-an-error'
    }

    const actualAction = setError('this-is-an-error');
    expect(actualAction).toEqual(expectedAction);
});

it('should return correct action object with valid search term', () => {
    const expectedAction = {
        type: 'SET_SEARCH_TERM',
        searchTerm: 'this-is-an-search-term'
    }

    const actualAction = setSearchTerm('this-is-an-search-term');
    expect(actualAction).toEqual(expectedAction);
});
