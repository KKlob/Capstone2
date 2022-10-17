import React from 'react'
import Card from 'react-bootstrap/Card';


function DataCard({ data }) {

    return (
        <Card>
            <Card.Title>Career Data</Card.Title>
            <Card.Text>Votes w/ Party: {data.votes_with_party}%</Card.Text>
            <Card.Text>Bills Sponsored: {data.bills_sponsored}</Card.Text>
            <Card.Text>Bills Co-Sponsored: {data.bills_cosponsored}</Card.Text>
        </Card>
    )
}

export default DataCard;