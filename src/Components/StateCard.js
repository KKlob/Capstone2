import React from 'react';
import Card from 'react-bootstrap/Card';
import './StateCard.css';

function StateCard({ state, newState, data }) {

    function setState() {
        newState(state);
    }

    console.log(data);

    return (
        <Card as="button" onClick={setState} className="StateCard">
            <Card.Body>
                <Card.Title>
                    {state}
                </Card.Title>
                <Card.Text>
                    Simple State Info
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default StateCard;