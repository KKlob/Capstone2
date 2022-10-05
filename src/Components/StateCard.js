import React from 'react';
import Button from 'react-bootstrap/Button';

function StateCard({ state, newState }) {

    function setState() {
        newState(state);
    }

    return (
        <Button variant='primary' onClick={setState}>{state}</Button>
    )
}

export default StateCard;