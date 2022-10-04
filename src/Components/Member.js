import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AddInfoToMember, update } from '../app/actions';
import './Member.css';

function Member({ data }) {

    const dispatch = useDispatch();

    const { selectedMember } = useSelector(state => ({ selectedMember: state.selectedMember }));

    let party = data.party;
    let variant;
    if (party === "D") variant = "primary";
    if (party === "R") variant = "danger";
    if (party === "ID") variant = "success";

    function handleClick() {
        if (!(data.years_served)) {
            dispatch(AddInfoToMember(data.api_member_url));
        } else if (data !== selectedMember) {
            dispatch(update({ selectedMember: data }));
        }
    }


    return (
        <Col xs={3} className={`member ${party} mb-1`}>
            <Button className="memberButton" onClick={handleClick} variant={variant} size="sm">{data.name} | {data.state}</Button>
        </Col>
    )
}

export default Member;