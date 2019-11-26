import React from 'react';
import {connect} from 'react-redux';
import {createNote} from '../reducers/anecdoteReducer';

const AnecdoteForm = ({createNote}) => {

    const submit = (e) => {
        e.preventDefault();
        createNote(e.target.children[0].children[0].value);
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

export default connect(null, {createNote})(AnecdoteForm);