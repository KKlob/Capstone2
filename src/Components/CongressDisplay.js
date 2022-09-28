import React from 'react';
import { useSelector } from 'react-redux';
import Member from './Member';

function CongressDisplay() {

    const { mainDisplay, senateMembers, houseMembers } = { mainDisplay: useSelector(state => state.mainDisplay), senateMembers: useSelector(state => state.senateMembers), houseMembers: useSelector(state => state.houseMembers) }


    if (mainDisplay === "Senate") {
        let iterator = senateMembers.entries();
        let member = iterator.next();
        const memberArray = [];
        while (!member.done) {
            memberArray.push(member.value[1]);
            member = iterator.next();
        }

        console.log(memberArray);

        return (
            <div id="congressDisplay">
                {memberArray.map(member => <Member data={member} key={member.id} />)}
            </div>
        )
    } else if (mainDisplay === "House") {
        return (
            <div id="congressDisplay">

            </div>
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