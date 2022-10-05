import React from 'react';
import Card from 'react-bootstrap/Card';
import testImage from './Images/testphoto.jpg';

function Member({ data }) {

    return (
        <Card>
            <Card.Img variate="top" src={testImage} />
            <Card.Body>
                <h5>{data.name}</h5>
            </Card.Body>
        </Card>
    )
}

export default Member;