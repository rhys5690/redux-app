//a reducer takes in
//1 - The action
//2 - a copy of current state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
