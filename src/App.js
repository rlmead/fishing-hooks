import { useState } from 'react';
import Store from './Store.js';
import Cart from './Cart.js';
import Shipping from './Shipping.js'
import { Jumbotron, Nav, NavItem, NavLink, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

function App() {
  // stateful object to keep track of what's in user's cart
  const [cart, setCart] = useState([]);
  // stateful string to track the view of the store
  const [view, setView] = useState('store');
  // track user/shipping info - does this need to be stateful?
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    country: '',
    state: '',
    zipCode: ''
  });

  // array listing all pages
  // for navbar tabs and to determine view
  const views = ['store', 'cart', 'shipping'];

  // array to hold the store's merchandise
  const store = [
    {
      name: 'boat',
      cost: 3000
    },
    {
      name: 'fishing pole',
      cost: 30
    },
    {
      name: 'gummy worms',
      cost: 3
    },
    {
      name: 'sardines',
      cost: 3
    },
  ];

  // function with switch statement to determine what component to render
  // according to the current view
  const switchView = (view) => {
    switch (view) {
      case 'cart':
        return (
          <Cart
            cart={cart}
          />
        )
      case 'shipping':
        return (
          <Shipping
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        )
      default:
        return (
          <Store
            data={store}
          />
        )
    }
  };

  // function to add/remove items from cart
  // to be called by buttons next to each item
  const updateCart = (item, num) => {
    console.log(`adding ${num} ${item}s to cart`);
  }

  return (
    <div className="App">
      {/* jumbotron header */}
      <Jumbotron
        fluid
        className='mb-0 text-left text-light p-4'
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524785281156-c3c68d1e03c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)', backgroundSize: '100%' }}>
        <h1>bluegrass bait & tackle</h1>
        <h2>lex ky</h2>
      </Jumbotron>
      {/* navbar with all the possible views */}
      <Nav
        justified
        tabs
        className='bg-light'>
        {
          views.map((item, index) => {
            return (
              <NavItem
                key={'button-' + index}>
                <NavLink
                  className={(view === item) ? 'active' : ''}
                  id={item}
                  onClick={() => setView(item)}>
                  <h5>{item}</h5>
                </NavLink>
              </NavItem>
            )
          })
        }
      </Nav>
      {/* choose and render the body component based on the current view */}
      <Container className='p-0'>
        <Row className='mt-2'>
          <Col
            md='7'>
            {switchView(view)}
          </Col>
          {/* show the running total on the side of every page */}
          <Col
            md='5'>
            <ListGroup>
              <ListGroupItem>
                'total'
            </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
