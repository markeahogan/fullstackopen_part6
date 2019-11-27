import anecdoteService from '../services/anecdotes';

export const createVote = (anecdote) => {
  return async dispatch => {    
    const updatedAnecdote = {...anecdote, votes:anecdote.votes+1};
    const result = await anecdoteService.update(updatedAnecdote);
    return dispatch({type:'UPDATE', anecdote:result});
  }
};

export const createAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote);
    dispatch({type:'CREATE_ANECDOTE', anecdote:newAnecdote});
  }
};

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({type:'INIT_ANECDOTES', anecdotes});
  }
};

const reducer = (state = [], action) => {
  switch(action.type){
    case 'UPDATE':
      return state.map(x => x.id == action.anecdote.id ? action.anecdote : x).sort((x,y) => y.votes-x.votes);
    case 'CREATE_ANECDOTE':
      return state.concat(action.anecdote).sort((x,y) => y.votes-x.votes);
    case 'INIT_ANECDOTES':
      return action.anecdotes.sort((x,y) => y.votes-x.votes);
  };
  return state;
}

export default reducer