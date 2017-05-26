//a reducer takes in
//1 - The action
//2 - a copy of current state

function posts(state = [], action) {
  switch(action.type) {
  case 'INCREMENT_LIKES' :
    console.log("incremented likes")
    const i = action.index;
    return [
      ...state.slice(0, i),
      {...state[i], likes: state[i].likes + 1 },
      ...state.slice(i + 1)
    ]
    default:
      return state;
  }
}

export default posts;
