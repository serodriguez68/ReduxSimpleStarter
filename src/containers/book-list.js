// Container / Smart Component: react component that has a direct connection
// to the state managed by redux (using react-redux library)

// What components to promote to container:
// The most parent component that needs to take care of state (not necessarily
// the app component)

import React, { Component } from 'react';
import { connect } from 'react-redux';

// import action creator
import { selectBook } from '../actions/index';
// import function that makes returned action to flow through all reducers
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          // when a user clicks on a book we are calling the action creator
          onClick={(event) => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render(){
    return (
      <ul className='list-group col-sm-4'>
        { this.renderList() }
      </ul>
    );
  }
}

// Whatever is returned will show up as props inside of BookList
function mapStateToProps(state){
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the BookList
// container
// In this case the action creator will be available as function in the props
// of the container
function mapDispatchToProps(dispatch){

  // Whenever selectBook is called, the result should be passed
  // to all of our redurcers
  // The selectBook value is the selectBook imported before
  // dispatch: makes action flows though all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

// connect takes a mapping function and a component to create a container
// When the redux state changes, the component gets re-rendered
// it needs to know about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);


