import React from 'react';
import {createVote} from '../reducers/anecdoteReducer';
import {setNotification, clearNotification} from '../reducers/notificationReducer';

const AnecdoteList = ({store}) => {
  const {anecdotes} = store.getState();

  const vote = ({content, id}) => {
    console.log('vote', id);
    store.dispatch(createVote(id));

    store.dispatch(setNotification(`you voted for ${content}`));
    setTimeout(() => store.dispatch(clearNotification()), 5000);
  }; 

  const passesFilter = (x) => {
    const filter = store.getState().filter;
    return !filter || x.content.includes(filter);
  }

  return (
      <>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        passesFilter(anecdote) &&
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
      </>
  )
}

export default AnecdoteList;