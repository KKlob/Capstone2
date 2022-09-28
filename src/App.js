import React from 'react';
import { useDispatch } from 'react-redux';
import { getDataFromAPI } from './app/actions';
function App() {

    const dispatch = useDispatch();

    dispatch(getDataFromAPI());

    return (
        <div id="app">
            <p>This is the app</p>
        </div>
    )
}

export default App;