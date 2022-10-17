import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { AddInfoToMember, changeCurrMember } from '../app/actions';
import './Member.css';


function Member({ data }) {

    const { memberData, currMember } = useSelector(store => ({ memberData: store.memberData[data.id], currMember: store.currMember }));

    const dispatch = useDispatch();

    function handleClick() {
        if (!memberData) dispatch(AddInfoToMember(data.api_member_url));
        if (data !== currMember) dispatch(changeCurrMember(data));
    }

    let color = "success";
    if (data.party === "D") { color = "primary" }
    else if (data.party === "R") { color = "danger" }

    return (
        <Button variant={"outline-" + color} onClick={handleClick}>
            {data.name}
        </Button>
    )
}

export default Member;