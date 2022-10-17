import React from 'react';
import Card from 'react-bootstrap/Card';
import Util from '../Utilities/Utilities';
import './StateCard.css';

function StateCard({ state, newState, members }) {

    function setState() {
        newState(state);
    }

    let color;
    const memberCount = Util.countStateMembers(members);
    if (memberCount.D > memberCount.R) {
        color = "bg-primary";
    } else if (memberCount.R > memberCount.D) {
        color = "bg-danger";
    } else if (memberCount.I > memberCount.D && memberCount.I > memberCount.R) {
        color = "bg-success";
    }


    return (
        <Card as="button" onClick={setState} className={"StateCard text-white " + color} style={color ? { backgroundColor: "" } : { backgroundColor: "purple" }}>
            <Card.Body>
                <Card.Title>
                    {state}
                </Card.Title>
                <Card.Text>
                    R: {memberCount.R} | D: {memberCount.D} | I: {memberCount.I ? memberCount.I : 0}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default StateCard;