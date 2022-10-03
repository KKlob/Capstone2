import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { AddInfoToMember } from '../app/actions';
import uuid from 'react-uuid';


function InfoDisplay() {

    const { selectedMember } = { selectedMember: useSelector(state => state.selectedMember) }

    const dispatch = useDispatch();

    dispatch(AddInfoToMember());

    if (selectedMember) {



        return (
            <Container fluid>
                <Row>
                    <Col className="mempic" xs={2}>
                        <p>Image goes here</p>
                    </Col>
                    <Col className="basic_info">
                        <Container fluid>
                            <Row className="justify-content-center">
                                {Object.keys(selectedMember).map((key) => {
                                    if (key !== "socials") {
                                        return (
                                            <Col key={uuid()}>
                                                <Card>
                                                    <Card.Title>{key.charAt(0).toUpperCase() + key.slice(1)}</Card.Title>
                                                    <Card.Body>{selectedMember[key]}</Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                    }
                                    return null;
                                })}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container >
        )
    }

    return null;
}

export default InfoDisplay;