import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Util from '../Utilities/Utilities';
import ChamberContainer from './ChamberContainer';
import './StateMembers.css';

function StateMembers({ selectedState, resetState }) {

    const { stateMembers } = useSelector(state => ({ stateMembers: state.states[selectedState] }));

    const sortedMembers = Util.sortStateMembers(stateMembers);


    return (
        <Container fluid id="StateMembers align-items-center" >
            <Row className='justify-content-center'>
                <Col className="text-center">
                    <Button variant='primary' onClick={resetState}>Return to States</Button>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="text-center">
                    <h3>{selectedState}</h3>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={4} className="text-center mt-2">
                    <h3>Senate</h3>
                    <ChamberContainer members={sortedMembers.Senate} chamber="Senate" />
                </Col>
            </Row>
            <Row className='justify-content-evenly'>
                <Col xs={12} className="text-center mt-2">
                    <h3>House of Representatives</h3>
                    <ChamberContainer members={sortedMembers.House} chamber={"House"} />
                </Col>
            </Row>
        </Container>
    )
}

export default StateMembers;