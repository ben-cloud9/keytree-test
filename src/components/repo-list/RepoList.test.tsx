import React from 'react';
import { shallow } from 'enzyme';
import { RepoList } from './RepoList';
const mockResponses = require('../../../integration-tests/mock-responses.json');

it('should show a message to prompt search when searchTerm is empty', () => {
    const wrapper = shallow(<RepoList repoList={[]} searchTerm="" />);
    expect(wrapper.find('.repo-list__message').exists()).toBe(true);
});

it('should render list when repoList has items', () => {
    const wrapper = shallow(<RepoList repoList={mockResponses} searchTerm="ben-cloud9" error="" renderList={true} />);
    expect(wrapper.find('.repo-list__message').exists()).toBe(false);
    expect(wrapper.find('RepoListItem').length).toBe(mockResponses.length);
});

it('should render error message when provided', () => {
    const wrapper = shallow(<RepoList repoList={[]} error="this-is-an-error" />);
    expect(wrapper.find('.error-message').exists()).toBe(true);
});