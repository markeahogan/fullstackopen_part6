import React from 'react';
import {createNote} from '../reducers/anecdoteReducer';

const AnecdoteForm = ({store}) => {

    const submit = (e) => {
        e.preventDefault();
        store.dispatch(createNote(e.target.children[0].children[0].value));
    }

    return ( 
        <>       
        <h2>create new</h2>
        <form onSubmit={submit}>
            <div><input className='note'/></div>
            <button>create</button>
        </form>
        </>
    );
};

export default AnecdoteForm;