import React from 'react'
import {Card} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

function CardMovie({Movie}) {
    return (
        <div>
 <Card style={{ width: '16rem',marginTop:"10px"}}>
  <Card.Img variant="top" src={Movie.image} />

  <Card.Body>
    <Card.Title>{Movie.name}</Card.Title>
    <Card.Text> {Movie.description}</Card.Text>
  
    <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    edit={false}
    value={Movie.rating}
    isHalf={true}
  />
  </Card.Body>

</Card>
        </div>
    )
}

export default CardMovie
