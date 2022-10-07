import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import uuid from 'react-uuid';
import Member from './Member';

function ChamberContainer({ members, chamber }) {

    return (
        <Container className={chamber + "Container"} fluid>
            <Row className="justify-content-center">
                {members.map(member => (
                    <Col xs={6} key={uuid()}>
                        <Member data={member} />
                    </Col>))}
            </Row>
        </Container>
    )
}

export default ChamberContainer;