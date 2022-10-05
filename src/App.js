import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CongressDisplay from './Components/CongressDisplay';
import { getDataFromAPI } from './app/actions';
import Container from 'react-bootstrap/Container';
import './App.css';

function App() {

    const dispatch = useDispatch();

    const store = useSelector(store => store);

    useEffect(function setupStore() {
        dispatch(getDataFromAPI())
    }, [dispatch]);

    if (store.states) {
        return (
            <Container id="app">
                <CongressDisplay />
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