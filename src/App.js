import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfoDisplay from './Components/InfoDisplay';
import StateDisplay from './Components/StateDisplay';
import { getDataFromAPI } from './app/actions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function App() {

    const dispatch = useDispatch();

    const store = useSelector(store => store);

    useEffect(function setupStore() {
        dispatch(getDataFromAPI())
    }, [dispatch]);

    if (store.states) {
        return (
            <Container id="app" fluid>
                <Row className="justify-content-center">
                    <Col xs={10}>
                        <InfoDisplay />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={10}>
                        <StateDisplay />
                    </Col>
                </Row>
            </Container>
        )
    }
    else {

        return (
            <h3>Loading Data...</h3>
        )
    }
}

export default App;