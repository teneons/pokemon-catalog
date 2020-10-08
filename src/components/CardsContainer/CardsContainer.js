import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CardsContainer = () => {

  return(
    <Container className='shadow-sm'>
      <Row>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
      </Row>
      <Row>
        <Col>2</Col>
        <Col>2</Col>
        <Col>2</Col>
      </Row>
    </Container>
  )
}

export default CardsContainer;