import React from 'react';
import {createVote} from './reducers/anecdoteReducer';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

const App = (props) => {
  const anecdotes = props.store.getState()

  const vote = (id) => {
    console.log('vote', id);
    props.store.dispatch(createVote(id));
  }; 

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList {...props} />
      <AnecdoteForm {...props} />
    </div>
  )
}

export default App;