import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useSelector, shallowEqual } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StateMembers from './StateMembers';
import StateCard from './StateCard';
import './StateDisplay.css';


function StateDisplay() {

    const { states } = useSelector(store => ({ states: store.states || "" }), shallowEqual);

    const stateCodes = Object.keys(states).sort();

    const [selectedState, setState] = useState(null);

    if (selectedState === null) {

        function newState(state) {
            setState(state);
        }

        return (
            <Container id="StateDisplay" fluid>
                <Row className="justify-content-center align-items-center">
                    {stateCodes.map(state => (
                        <Col xs={1} key={uuid()}>
                            <StateCard state={state} newState={newState} members={states[state]} />
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    } else {
        function resetState() {
            setState(null);
        }

        return (
            <StateMembers selectedState={selectedState} resetState={resetState} />
        )
    }
}

export default StateDisplay;