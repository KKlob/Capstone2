import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Util from '../Utilities/ApiUtilities';
import SenateContainer from './SenateContainer';
import HouseContainer from './HouseContainer';
import './StateMembers.css';

function StateMembers({ selectedState, resetState }) {

    const { stateMembers } = useSelector(state => ({ stateMembers: state.states[selectedState] }));

    const sortedMembers = Util.sortStateMembers(stateMembers);

    return (
        <Container fluid id="StateMembers">
            <Row className='justify-content-center'>
                <Col xs={4} className="Senate text-center">
                    <h3>Senate</h3>
                </Col>
                <Col xs={2} className="justify-content-center">
                    <Button variant='primary' onClick={resetState}>Return to States</Button>
                </Col>
                <Col xs={4} className="House text-center">
                    <h3>House of Representatives</h3>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={4} className="text-center">
                    <SenateContainer members={sortedMembers.Senate} />
                </Col>
                <Col xs={2}></Col>
                <Col xs={4} className="text-center">
                    <HouseContainer members={sortedMembers.House} />
                </Col>
            </Row>
        </Container>
    )
}

export default StateMembers;