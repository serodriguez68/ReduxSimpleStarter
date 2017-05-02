import { combineReducers } from 'redux';

// files from project
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';


// Combines all reducers to generate the application state.
const rootReducer = combineReducers({
  // The books piece of state gets set to whatever the BooksReducer function
  // returns
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
