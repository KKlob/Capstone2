import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataFromAPI } from './app/actions';
function App() {

    const { testState } = { testState: useSelector(state => state) }
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(getDataFromAPI());
    }

    return (
        <div id="app">
            <p>This is the app</p>
            {testState.results ? testState.results[0].members.map(member => (<p>{member.first_name + " " + member.last_name}</p>)) : null}
            <button onClick={handleClick}>Click to get API data</button>
        </div>
    )
}

export default App;