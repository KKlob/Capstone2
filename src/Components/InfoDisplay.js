import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useSelector, shallowEqual } from 'react-redux';
import uuid from 'react-uuid';
import './InfoDisplay.css';


function InfoDisplay() {

    const { selectedMember } = useSelector(state => ({ selectedMember: state.currMember }), shallowEqual);
    const { memberData } = useSelector(state => ({ memberData: (selectedMember !== null ? state.memberData[selectedMember.id] : null) }));

    if (selectedMember && memberData) {

        const member = { ...selectedMember, ...memberData }
        console.log(member);
        return (
            <Container id="InfoDisplay" fluid>
                <Row>
                    <Col className="mempic" xs={2}>
                        <p>Image goes here</p>
                    </Col>
                    <Col className="basic_info">
                        <Container fluid>
                            <Row className="justify-content-center">
                                {Object.keys(member).map((key) => {
                                    if (key !== "socials" && key !== "photo") {
                                        return (
                                            <Col key={uuid()}>
                                                <Card>
                                                    <Card.Title>{key.charAt(0).toUpperCase() + key.slice(1)}</Card.Title>
                                                    <Card.Body>{member[key]}</Card.Body>
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
    } else if (selectedMember) {
        console.log(selectedMember);
        return (
            <Container id="InfoDisplay" fluid>
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
    return (
        <Container id="InfoDisplay" fluid>
            <Row>
                <Col className="text-center">
                    <h3>Click on a member of Congress for more information here!</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default InfoDisplay;