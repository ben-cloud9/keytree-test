import reducer from './reducer';

it('should set default state', () => {
    const expectedDefaultState = {
        error: false,
        loading: false,
        repoList: []
    }

    const actualDefaultState = reducer();

    expect(actualDefaultState).toEqual(expectedDefaultState);
})