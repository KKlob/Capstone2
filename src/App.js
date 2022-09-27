import React from 'react';
import { useSelector } from 'react-redux';

function App() {

    const { test } = { test: useSelector(state => state.test) }

    return (
        <div id="app">
            <p>This is the app</p>
            <p>{test}</p>
        </div>
    )
}

export default App;