import React from 'react'
import Card from 'react-bootstrap/Card';


function SocialsCard({ data }) {

    return (
        <Card>
            <Card.Title>Social Links</Card.Title>
            <Card.Link href={data.facebook}>Facebook</Card.Link>
            <Card.Link href={data.twitter}>Twitter</Card.Link>
            <Card.Link href={data.youtube}>Youtube</Card.Link>
        </Card>
    )
}

export default SocialsCard;