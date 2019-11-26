import React from 'react';
import {connect} from 'react-redux';
import {createVote} from '../reducers/anecdoteReducer';
import {setNotification, clearNotification} from '../reducers/notificationReducer';

const AnecdoteList = ({anecdotes, createVote, setNotification, clearNotification}) => {

  const vote = ({content, id}) => {
    createVote(id);
    setNotification(`you voted for ${content}`);
    setTimeout(clearNotification, 5000);
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
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
      </>
  )
}

const mapStateToProps = (state) => {
    const passesFilter = (x) => {
      const filter = state.filter;
      return !filter || x.content.includes(filter);
    }
    const filteredAnecdotes = state.anecdotes.filter(x => passesFilter(x));

    return {
        anecdotes:filteredAnecdotes
    }
}

const mapDispatchToProps = {
  createVote,
  setNotification,
  clearNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);