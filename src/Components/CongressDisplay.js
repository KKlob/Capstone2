import React from 'react';
import { useSelector } from 'react-redux';
import PartyContainer from './PartyContainer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CongressDisplay() {

    const { mainDisplay } = { mainDisplay: useSelector(state => state.mainDisplay) }

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col>
                    <PartyContainer display={mainDisplay} />
                </Col>
            </Row>
        </Container>
    )




    // if (mainDisplay === "Senate") {

    //     return (
    //         <Container id="congressDisplay" fluid>
    //             <Row className="justify-content-center">
    //                 {[...senateMembers.values()].map(member => <Member data={member} key={member.id} />)}
    //             </Row>
    //         </Container>
    //     )
    // } else if (mainDisplay === "House") {
    //     return (
    //         <Container id="congressDisplay" fluid>
    //             <Row className="justify-content-center">
    //                 {[...houseMembers.values()].map(member => <Member data={member} key={member.id} />)}
    //             </Row>
    //         </Container>
    //     )
    // } else {
    //     return (
    //         <div id="spinner">
    //             <p>This represents a loading spinner</p>
    //         </div>
    //     )
    // }


}

export default CongressDisplay;