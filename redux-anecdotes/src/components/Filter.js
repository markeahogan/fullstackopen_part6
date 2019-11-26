import React from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../reducers/filterReducer';

const Filter = ({setFilter}) => {    
    const handleChange = (event) => {
        const value = event.target.value;
        setFilter(value);
    };

    const style = {
        marginBottom: 10
    };

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    );
};

const mapDipatchToProps = {
    setFilter
}

export default connect(null, mapDipatchToProps)(Filter);