import React, { Component } from 'react';

class BookForm extends Component {

    displayAuthors(){
        let data = this.props.data;
        if(data.loading){
            return(<option> Loading Authors..</option>)
        } else{
            return(
                data.authors.map(author => {
                    return (
                    <option key={author.id} value={author.id}>
                        {author.name}
                    </option>)
                })
            )
        }
    }

    render() { 
        return (  
            <form id="add-book" onSubmit={this.props.submitForm }>
                <div className="field">
                    <label>
                        Book Name:
                    </label>
                    <input type="text" onChange={(e) => { this.props.setField({name: e.target.value}) }}/>
                </div>
                <div className="field">
                    <label>
                        Genre:
                    </label>
                    <input type="text" onChange={(e) => { this.props.setField({genre: e.target.value}) }}/>
                </div>
                <div className="field">
                    <label>
                        Author:
                    </label>
                    <select onChange={(e) => { this.props.setField({authorId: e.target.value}) }}>
                        <option>
                            Select author
                        </option>
                        {this.displayAuthors()}
                    </select>
                    <button>+</button>
                </div>
            </form>

        );
    }
}
 
export default BookForm;