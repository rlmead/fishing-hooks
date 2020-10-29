import { useState } from 'react';
import Store from './Store.js';
import Cart from './Cart.js';
import Shipping from './Shipping.js'
import Checkout from './Checkout.js'

import { Jumbotron, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

function App() {
  // declare a stateful object to keep track of what's in user's cart
  const [cart, setCart] = useState([]);
  // declare a stateful string to track the view of the store
  const [view, setView] = useState('store');

  // declare an array to track all store views (tabs)
  const views = ['store', 'cart', 'shipping', 'checkout'];

  // declare a switch statement to determine what component to render
  // according to the current view
  function switchView(view) {
    switch (view) {
      case 'cart':
        return (
          <Cart
            data={cart}
          />
        )
      case 'shipping':
        return (
          <Shipping />
        )
      case 'checkout':
        return (
          <Checkout />
        )
      default:
        return (
          <Store
            data={store}
          />
        )
    }
  };

  // declare an array to hold the store's merchandise
  const store = [
    {
      item: 'boat',
      cost: 3000
    },
    {
      item: 'fishing pole',
      cost: 30
    },
    {
      item: 'gummy worms',
      cost: 3
    },
    {
      item: 'sardines',
      cost: 3
    },
  ];

  function updateCart(item,num) {
    console.log(`add ${item} to card`);
  }

  return (
    <div className="App">
      {/* jumbotron header */}
      <Jumbotron
        fluid
        className='mb-0 text-left text-light'
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524785281156-c3c68d1e03c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)', backgroundSize: '100%' }}>
        <h1>bluegrass bait & tackle</h1>
        <h2>lex ky</h2>
      </Jumbotron>
      {/* navbar with views equipment, snacks, and checkout */}
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
      <Container>
        <Row className='mt-2'>
        <Col
        sm='8'>
          {switchView(view)}
        </Col>
        <Col
        sm='4'
        className='border border-secondary'>
          'total'
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
