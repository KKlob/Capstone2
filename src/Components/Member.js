import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Member({ data }) {

    let party = data.party;
    let variant;
    if (party === "D") variant = "primary";
    if (party === "R") variant = "danger";
    if (party === "ID") variant = "success";


    return (
        <Col xs={3} className={`member ${party}`}>
            <Button className="memberButton" variant={variant} size="sm">{data.name} | {data.state}</Button>
        </Col>
    )
}

export default Member;