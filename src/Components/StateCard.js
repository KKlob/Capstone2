import React from 'react';
import Card from 'react-boostrap/Card';

function StateCard({ state, newState, data }) {

    function setState() {
        newState(state);
    }

    console.log(data);

    return (
        <Card onClick={setState}>
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