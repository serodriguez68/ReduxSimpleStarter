// all reducers get two arguments. State and action.
// Reducers are called whenever an action (any) is triggered in the app.
// State argument is not application state, only the state this reducer is
// responsible for.
// i.e the previous value of this reducer.
// state = null: when state is undefined set value to null
export default function (state = null, action){

  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
      // always return a new state, do not modify current one
      // i.e do not do this
      // state.title = book.title
  }

  // In case we dont care about the action that is taking place, return the
  // same state
  return state
}
