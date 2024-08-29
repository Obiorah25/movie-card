import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={posterURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
      </Card.Body>
    </Card>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posterURL: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
