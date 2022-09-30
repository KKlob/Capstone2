import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromAPI } from './app/actions';
import CongressDisplay from './Components/CongressDisplay';
import Button from 'react-bootstrap/Button';
import { update } from './app/actions';

function App() {

    const dispatch = useDispatch();

    const { mainDisplay } = { mainDisplay: useSelector(state => state.mainDisplay) }

    if (!mainDisplay) {
        console.log("getting data from api!")
        dispatch(getDataFromAPI());
    }

    function toggleDisplay() {
        mainDisplay === "Senate" ? dispatch({ ...update({ mainDisplay: "House" }) }) : dispatch({ ...update({ mainDisplay: "Senate" }) });
    }

    return (
        <div id="app">
            <Button variant="primary" onClick={toggleDisplay}>Toggle Senate / House</Button>
            <CongressDisplay />
        </div>
    )
}

export default App;