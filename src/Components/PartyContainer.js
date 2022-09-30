import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Member from './Member';
import { useSelector } from 'react-redux';

function PartyContainer({ display }) {

    const { senateMembers, houseMembers } = { senateMembers: useSelector(state => state.senateMembers), houseMembers: useSelector(state => state.houseMembers) }

    function splitByParty(members) {
        const dem = [];
        const rep = [];
        const ind = [];
        [...members.values()].forEach(member => {
            if (member.party === "D") dem.push(member);
            if (member.party === "R") rep.push(member);
            if (member.party === "ID") ind.push(member);
        });
        return { dem, rep, ind }
    }

    function buildContainer(chamber, memberMap) {
        let members = splitByParty(memberMap);

        return (
            <Container className="text-center" fluid>
                <Row className="justify-content-center">
                    <Col xs={12}><h3>{chamber}</h3></Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <Container fluid>
                            <Row className="justify-content-center">
                                {members.dem.map(member => <Member data={member} key={member.id} />)}
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={6}>
                        <Container fluid>
                            <Row className="justify-content-center">
                                {members.rep.map(member => <Member data={member} key={member.id} />)}
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={8}>
                        <Container fluid>
                            <Row className="justify-content-center">
                                {members.ind.map(member => <Member data={member} key={member.id} />)}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }

    if (display === "Senate") return (buildContainer(display, senateMembers));
    if (display === "House") return (buildContainer(display, houseMembers));
    if (!display) return (<p>This is a loading spinner</p>)
}

export default PartyContainer;