import React, { Component } from 'react';
import { SearchForm } from './SearchForm';
import { shallow } from 'enzyme';

it('should render with empty input', () => {
    const setSearchTerm = () => undefined;
    const wrapper = shallow(<SearchForm setSearchTerm={setSearchTerm} />);
    const input = wrapper.find('input')
    expect(input.prop('value')).toBe('');
});

it('should call setSearchTerm on submission', () => {
    const setSearchTerm = jest.fn();
    const wrapper = shallow(<SearchForm setSearchTerm={setSearchTerm} />);
    // wrapper.find('form').prop('onSubmit')('search'); // tslint:disable-line
});
