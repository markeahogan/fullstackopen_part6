import React from 'react';
import {createVote} from './reducers/anecdoteReducer';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';

const App = (props) => {

  const vote = (id) => {
    console.log('vote', id);
    props.store.dispatch(createVote(id));
  }; 

  return (
    <div>
      <Notification {...props}/>
      <AnecdoteForm {...props} />
      <Filter {...props} />
      <AnecdoteList {...props} />
    </div>
  )
}

export default App;