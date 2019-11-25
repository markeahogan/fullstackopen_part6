import React from 'react';
import {createVote} from '../reducers/anecdoteReducer';

const AnecdoteList = ({store}) => {
  const {anecdotes} = store.getState();

  const vote = (id) => {
    console.log('vote', id);
    store.dispatch(createVote(id));
  }; 

  return (
      <>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      </>
  )
}

export default AnecdoteList;