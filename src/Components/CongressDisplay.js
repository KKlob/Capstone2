import React from 'react';
import { useSelector } from 'react-redux';
import Member from './Member';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function CongressDisplay() {

    const { mainDisplay, senateMembers, houseMembers } = { mainDisplay: useSelector(state => state.mainDisplay), senateMembers: useSelector(state => state.senateMembers), houseMembers: useSelector(state => state.houseMembers) }


    if (mainDisplay === "Senate") {

        return (
            <Container id="congressDisplay" fluid>
                <Row className="justify-content-center">
                    {[...senateMembers.values()].map(member => <Member data={member} key={member.id} />)}
                </Row>
            </Container>
        )
    } else if (mainDisplay === "House") {
        return (
            <Container id="congressDisplay" fluid>
                <Row className="justify-content-center">
                    {[...houseMembers.values()].map(member => <Member data={member} key={member.id} />)}
                </Row>
            </Container>
        )
    } else {
        return (
            <div id="spinner">
                <p>This represents a loading spinner</p>
            </div>
        )
    }


}

export default CongressDisplay;