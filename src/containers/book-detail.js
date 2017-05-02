import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render(){

    // What happens if this.props.book is not defined
    if (!this.props.book){
      return (<div>Select a book to get started.</div>);
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

// Whatever is returned will show up as props inside of BookDetail
function mapStateToProps (state){
  return ({
    book: state.activeBook
  });
}

export default connect(mapStateToProps)(BookDetail);
