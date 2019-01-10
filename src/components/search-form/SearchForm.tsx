import React, { Component } from 'react';
import { setSearchTerm } from '../../store/actions/actions';
import { connect } from 'react-redux';
import './SearchForm.scss';

interface ISearchFormProps {
    setSearchTerm(searchTerm: string): any
}

interface ISearchFormState {
    inputSearchTerm: string;
    error: string;
}

export class SearchForm extends Component<Partial<ISearchFormProps>, ISearchFormState> {
    constructor(props: Partial<ISearchFormProps>) {
        super(props);
        
        this.state = {
            inputSearchTerm: '',
            error: ''
        }
        this.onSearchTermChange = this.onSearchTermChange.bind(this);
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
    }

    handleFormSubmission(e: any) {
        e.preventDefault();

        const searchTerm = this.state.inputSearchTerm;
        if (!searchTerm) {
            return this.setState((state) => ({
                ...state,
                error: 'Please enter a search term'
            }));
        }
        if (this.props.setSearchTerm) {
            this.setState((state) => ({
                ...state,
                error: ''
            }));
            return this.props.setSearchTerm(searchTerm);
        }

        throw new Error('please pass a method to setSearchTermProp');
    }

    onSearchTermChange(e: any) {
        const newSearchTerm = e.target.value;
        this.setState(() => ({
            inputSearchTerm: newSearchTerm
        }));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmission} className="search-form">
                    <label htmlFor="search-term">Enter a search term</label>
                    <input
                        type="text"
                        name="search-term"
                        id="search-term"
                        className="search-form__input"
                        placeholder="Enter search term here..."
                        value={this.state.inputSearchTerm}
                        onChange={this.onSearchTermChange}
                        autoFocus
                    /><br/>
                    <button type="submit" className="search-form__button">Search</button>
                </form>
                {!!this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}

interface IMapDispatchToProps {
    setSearchTerm: (searchTerm: string) => any;
}
const mapDispatchToProps = (dispatch: any) => ({
    setSearchTerm: (searchTerm: string) => dispatch(setSearchTerm(searchTerm))
});

export default connect<undefined, IMapDispatchToProps, undefined, ISearchFormProps>(null, mapDispatchToProps)(SearchForm);