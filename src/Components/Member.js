import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { AddInfoToMember, changeCurrMember } from '../app/actions';
import './Member.css';


function Member({ data }) {

    const { memberData, currMember } = useSelector(store => ({ memberData: store.memberData[data.id], currMember: store.currMember }));

    const dispatch = useDispatch();

    function handleClick() {
        if (!memberData) dispatch(AddInfoToMember(data.api_member_url));
        if (data !== currMember) dispatch(changeCurrMember(data));
    }


    return (
        <Card as="button" className="Member" onClick={handleClick}>
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Member;