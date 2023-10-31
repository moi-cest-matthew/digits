import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const StuffItem = ({ stuff }) => (
  <Card className="h-100">
    <Card.Img variant="top" src={stuff.image} style={{ width: '75px' }} />
    <Card.Body>
      <Card.Title>{stuff.firstname} {stuff.lastname}</Card.Title>
      <Card.Subtitle>{stuff.address}</Card.Subtitle>
      <Card.Text>{stuff.description}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
StuffItem.propTypes = {
  stuff: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default StuffItem;
