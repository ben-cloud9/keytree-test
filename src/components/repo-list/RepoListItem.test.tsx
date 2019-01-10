import React from 'react';
import { shallow } from 'enzyme';
import RepoListItem from './RepoListItem';
import { format } from 'date-fns';

const mockResponses = require('../../../integration-tests/mock-responses.json');

it('should render required info', () => {
    const wrapper = shallow(<RepoListItem repo={mockResponses[0]} />)
    expect(wrapper.text()).toContain(mockResponses[0].name);
    expect(wrapper.text()).toContain(mockResponses[0].html_url);
    expect(wrapper.text()).toContain(mockResponses[0].description);
    expect(wrapper.text()).toContain(mockResponses[0].clone_url);
    expect(wrapper.text()).toContain(format(new Date(mockResponses[0].pushed_at), 'DD/MM/YYYY hh:mm a'));
});
