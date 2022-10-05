import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StateDisplay from './StateDisplay';
import './CongressDisplay.css';

function CongressDisplay() {

    return (
        <Container fluid id="CongressDisplay">
            <Row className="justify-content-center">
                <Col>
                    <StateDisplay />
                </Col>
            </Row>
        </Container >
    )
}

export default CongressDisplay;