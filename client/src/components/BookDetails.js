
import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { getBookQuery } from '../queries/queries'

class BookDetails extends Component{
   
    render(){
       return(
        <div>
            <ul id="book-list">
                    {this.displayBooks()}
            </ul>
        </div>
       )
    }
}

export default graphql(getBookQuery)(BookDetails)