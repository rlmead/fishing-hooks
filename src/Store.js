import { data } from 'jquery';
import { ListGroup, ListGroupItem, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function Store(props) {
  // render 
  return (
    <ListGroup className='mb-2'>
      <ListGroupItem>
        <Row>
          <Col xs='3' />
          <Col xs='6'>
            <p style={{ fontWeight: 'bold' }}>item</p>
          </Col>
          <Col xs='3'>
            <p style={{ fontWeight: 'bold' }}>cost</p>
          </Col>
        </Row>
      </ListGroupItem>
        {
          props.data.map((item, index) => {
            return (
              <ListGroupItem
              key={index}>
                <Row>
                  <Col xs='1'>
                    <FontAwesomeIcon icon={faPlus} onClick={() => props.updateCart(item.name, 1)}/>
                  </Col>
                  <Col xs='2'>
                    <FontAwesomeIcon icon={faMinus} onClick={() => props.updateCart(item.name, -1)}/>
                  </Col>
                  <Col xs='6'>
                    <p>{item.name}</p>
                  </Col>
                  <Col xs='3'>
                    <p>${item.cost}</p>
                  </Col>
                </Row>
              </ListGroupItem>
            )
          })
        }
    </ListGroup>
  )
}

export default Store;