import React from 'react';
import {connect} from 'react-redux';
import {createAnecdote} from '../reducers/anecdoteReducer';

const AnecdoteForm = ({createAnecdote}) => {

    const submit = async (e) => {
        e.preventDefault();
        const content = e.target.children[0].children[0].value;
        createAnecdote(content);
    }

    return ( 
        <>       
        <h2>create new</h2>
        <form onSubmit={submit}>
            <div><input /></div>
            <button>create</button>
        </form>
        </>
    );
};

export default connect(null, {createAnecdote})(AnecdoteForm);