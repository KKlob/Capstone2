import React from 'react';
import { useDispatch } from 'react-redux';
import { getDataFromAPI } from './app/actions';
import CongressDisplay from './Components/CongressDisplay';
function App() {

    const dispatch = useDispatch();

    dispatch(getDataFromAPI());

    return (
        <div id="app">
            <CongressDisplay />
        </div>
    )
}

export default App;