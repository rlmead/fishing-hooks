import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
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
                  {/* create item string according to whether the view is store or cart, and whether the cart contains multiples of this item, and whether the item name ends in 's' */}
                    <p>{item.count
                        ? item.count+' '+item.name+
                          (item.count > 1
                            ? (item.name[item.name.length-1] === 's' ? 'es'
                            : 's')
                          : '')
                        : item.name}</p>
                  </Col>
                  <Col xs='3'>
                    <p className='text-right'>${item.cost}</p>
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