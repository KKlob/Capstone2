import React from 'react'
import Card from 'react-bootstrap/Card';


function BasicInfoCard({ data }) {

    const calcAge = (dob) => {
        console.log(dob)
    }

    return (
        <Card>
            <Card.Title>Basic Info</Card.Title>
            <Card.Text>{data.name}</Card.Text>
            <Card.Text>Serves in: {data.chamber}</Card.Text>
            <Card.Text>Party: {data.party}</Card.Text>
            <Card.Text>State: {data.state}</Card.Text>
            <Card.Text>Age: {calcAge(data.dob)}</Card.Text>
            <Card.Text>Years Served: {data.years_served}</Card.Text>
        </Card>
    )
}

export default BasicInfoCard;