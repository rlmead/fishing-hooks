import { data } from 'jquery';
import { ListGroup, ListGroupItem, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function Store(props) {
  // render 
  return (
    <ListGroup>
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
              <ListGroupItem>
                <Row>
                  <Col xs='1'>
                    <FontAwesomeIcon icon={faPlus} />
                  </Col>
                  <Col xs='2'>
                    <FontAwesomeIcon icon={faMinus} />
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