import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PartyContainer from './PartyContainer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { getDataFromAPI, update } from '../app/actions';


function CongressDisplay() {

    const dispatch = useDispatch();

    const { mainDisplay } = useSelector(state => ({ mainDisplay: state.mainDisplay }), shallowEqual);

    if (!mainDisplay) {
        console.log("getting data from api!")
        dispatch(getDataFromAPI());
    }

    function toggleDisplay() {
        mainDisplay === "Senate" ? dispatch(update({ mainDisplay: "House" })) : dispatch(update({ mainDisplay: "Senate" }));
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Button variant="primary" onClick={toggleDisplay}>Toggle Senate / House</Button>
                </Col>
            </Row>
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