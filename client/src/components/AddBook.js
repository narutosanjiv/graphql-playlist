import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'

import AddBookForm from './AddBookForm'
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'

class AddBook extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm(e){
        e.preventDefault()
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        })
        console.log(this.state)
    }

    setField(hsh){
        console.log(hsh)
        this.setState(hsh)
    }

    render() { 
        return ( 
            <AddBookForm data={this.props.getAuthorsQuery} setField={this.setField.bind(this)} submitForm={this.submitForm} />
        );
    }
}
 
export default compose(
    graphql(getAuthorsQuery, {name: 'getAuthorsQuery'}),
    graphql(addBookMutation, {name: 'addBookMutation'})
    )(AddBook);
