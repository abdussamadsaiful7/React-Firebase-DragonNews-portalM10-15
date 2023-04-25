import React from 'react';
import { Card } from 'react-bootstrap';

const NewsCard = ({ news }) => {
    const { title, _id, details, image_url} = news;
    return (
        <Card className="mb-4">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url}/>
                <Card.Text>
                  {details.length < 250 ? <>{details}</>: <>{details.slice(0, 250)}...</>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCard;