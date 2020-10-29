import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap';

function Total(props) {
  // render 
  return (
    <ListGroup>
      <ListGroupItem>
        <Row>
          <Col xs='6'>
            <p style={{ fontWeight: 'bold' }}>subtotal</p>
          </Col>
          <Col xs='6'>$500</Col>
        </Row>
        <Row>
          <Col xs='6'>
            <p style={{ fontWeight: 'bold' }}>tax</p>
          </Col>
          <Col xs='6'>$50</Col>
        </Row>
        <Row>
          <Col xs='6'>
            <p style={{ fontWeight: 'bold' }}>shipping</p>
          </Col>
          <Col xs='6'>$0</Col>
        </Row>
      </ListGroupItem>
      <ListGroupItem>
        <Row>
          <Col xs='6'>
            <p style={{ fontWeight: 'bold' }}>total</p>
          </Col>
          <Col xs='6'>$550</Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  )
}

export default Total;