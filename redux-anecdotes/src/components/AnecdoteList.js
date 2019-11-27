import React from 'react';
import {connect} from 'react-redux';
import {createVote} from '../reducers/anecdoteReducer';
import {setNotification} from '../reducers/notificationReducer';

const AnecdoteList = ({anecdotes, createVote, setNotification}) => {

  const vote = (anecdote) => {
    createVote(anecdote);
    setNotification(`you voted for ${anecdote.content}`, 5);
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
      return !filter || x.content.toLowerCase().includes(filter.toLowerCase());
    }
    const filteredAnecdotes = state.anecdotes.filter(x => passesFilter(x));

    return {
        anecdotes:filteredAnecdotes
    }
}

const mapDispatchToProps = {
  createVote,
  setNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);