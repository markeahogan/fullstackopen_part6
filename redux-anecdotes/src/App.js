import React from 'react';
import {createVote} from './reducers/anecdoteReducer';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';

const App = (props) => {

  const vote = (id) => {
    console.log('vote', id);
    props.store.dispatch(createVote(id));
  }; 

  return (
    <div>
      <Notification {...props}/>
      <h2>Anecdotes</h2>
      <AnecdoteList {...props} />
      <AnecdoteForm {...props} />
    </div>
  )
}

export default App;