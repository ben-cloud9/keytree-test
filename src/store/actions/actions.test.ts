import { setRepoList } from './actions';
const mockRepoList = require('../../../integration-tests/mock-responses.json');

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
