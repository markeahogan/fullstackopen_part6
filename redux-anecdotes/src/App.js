import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';
import {initAnecdotes} from './reducers/anecdoteReducer';

const App = ({initAnecdotes}) => {

  useEffect(() => {
    initAnecdotes();
  });

  return (
    <div>
      <Notification />
      <AnecdoteForm />
      <Filter />
      <AnecdoteList />
    </div>
  )
}

const mapDispatchToProps = {
  initAnecdotes
}

export default connect(null, mapDispatchToProps)(App);