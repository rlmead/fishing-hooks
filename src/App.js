import { useState } from 'react';
import Total from './Total.js'
import Store from './Store.js';
import Shipping from './Shipping.js'
import { Jumbotron, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';

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

  // function to add/remove items from cart
  // to be called by buttons next to each item
  const updateCart = (item, num) => {
    // create a temporary cart array to hold updates
    let tempCart = cart;
    let index = cart.map(i => i.name).indexOf(item);;
    // add item to cart array if it's not already there
    if (index === -1) {
      if (num > 0) {
        tempCart.push({ name: item, count: num, cost: 0 });
      }
    // update item in cart array if it's already there
    } else {
      tempCart[index].count += num;
      // account for weird behavior -
      // the cart never seems to forget anything that was once added
      if (tempCart[index].count < 1) {
        tempCart[index].count = 0;
      }
    }
    // filter tempCart for anything with count < 1
    tempCart = tempCart.filter(i => i.count > 0);
    // update all tempCart costs with forEach
    tempCart.forEach(i => {
      let cost = store[store.map(n => n.name).indexOf(i.name)].cost;
      i.cost = i.count*cost;
    });
    console.log(cart);
    // update main cart variable
    setCart(tempCart);
  }

  // function with switch statement to determine what component to render
  // according to the current view
  const switchView = (view) => {
    switch (view) {
      case 'cart':
        return (
          <Store
            data={cart}
            updateCart={updateCart}
          />
        )
      case 'shipping':
        return (
          <Shipping
            data={userInfo}
            setUserInfo={setUserInfo}
          />
        )
      default:
        return (
          <Store
            data={store}
            updateCart={updateCart}
          />
        )
    }
  };

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
            <Total data={cart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
