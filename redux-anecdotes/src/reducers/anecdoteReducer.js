
export const createVote = (id) => {
  return {type:'VOTE', id};
};

export const createAnecdote = (anecdote) => {
  return {type:'CREATE_ANECDOTE', anecdote};
};

export const initAnecdotes = (anecdotes) => {
  return {type:'INIT_ANECDOTES', anecdotes};
};

const reducer = (state = [], action) => {
  switch(action.type){
    case 'VOTE':
      return state.map(x => x.id == action.id ? {...x, votes:x.votes+1} : x);
    case 'CREATE_ANECDOTE':
      return state.concat(action.anecdote).sort((x,y) => y.votes-x.votes);
    case 'INIT_ANECDOTES':
      return action.anecdotes;
  };
  return state;
}

export default reducer