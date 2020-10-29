import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap';

function Total(props) {
  // console.log(props.data);
  let subtotal =
    (props.data.length > 0)
    ? props.data.map(item => item.cost).reduce((acc, curr) => acc + curr)
    : 0;
  let tax = subtotal*.06;
  let shipping = 0;
  let total = subtotal+tax+shipping;
  // render 
  return (
    <ListGroup>
      <ListGroupItem>
        <Row>
          <Col xs='6'>
            <p style={{ fontWeight: 'bold' }}>subtotal</p>
          </Col>
          <Col xs='6'>${parseFloat(subtotal).toFixed(2)}</Col>
        </Row>
        <Row>
          <Col xs='6'>
            <p style={{ fontWeight: 'bold' }}>tax</p>
          </Col>
          <Col xs='6'>${parseFloat(tax).toFixed(2)}</Col>
        </Row>
        <Row>
          <Col xs='6'>
            <p style={{ fontWeight: 'bold' }}>shipping</p>
          </Col>
          <Col xs='6'>${parseFloat(shipping).toFixed(2)}</Col>
        </Row>
      </ListGroupItem>
      <ListGroupItem>
        <Row>
          <Col xs='6'>
            <p style={{ fontWeight: 'bold' }}>total</p>
          </Col>
          <Col xs='6'>${parseFloat(total).toFixed(2)}</Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  )
}

export default Total;