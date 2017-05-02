// Action creator: An function whose purpose is to return an action object
// Action: a js object that will run through all reducers. Reducers are responsible
// for implementing how their particular piece of state is changed given an action
export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action.
  // i.e an object with a type property.
  return {
    // type is always uppercase
    type: 'BOOK_SELECTED',
    // payload could be named to any other thing. However, by convention
    // it is usually named payload
    payload: book
  };
}
