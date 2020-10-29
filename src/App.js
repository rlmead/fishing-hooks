import { useState } from 'react';
import Shop from './Shop.js';
import { Jumbotron, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

function App() {
  // declare a stateful object to keep track of what's in user's cart
  const [cart, setCart] = useState({})
  // declare a stateful string to track the view of the shop
  const [view, setView] = useState('equipment')

  // declare an array to represent the store,
  // its departments,
  // and its merchandise
  const store = [
    {
      dept: 'equipment',
      merch: [
        {
          item: 'boat',
          cost: 3000
        },
        {
          item: 'fishing pole',
          cost: 30
        },
      ]
    },
    {
      dept: 'snacks',
      merch: [
        {
          item: 'gummy worms',
          cost: 3
        },
        {
          item: 'sardines',
          cost: 3
        },
      ]
    },
  ]

  // declare an array to track all shop views (tabs)
  // gathering shop department info from store array
  const views = store.map(item => item.dept).concat(['checkout']);

  return (
    <div className="App">
      {/* jumbotron header */}
      <Jumbotron
        fluid
        className='mb-1 text-left text-light'
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524785281156-c3c68d1e03c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)', backgroundSize: '100%' }}>
        <h1>bluegrass bait & tackle</h1>
        <h2>lex ky</h2>
      </Jumbotron>
      {/* navbar with pages equipment, snacks, and checkout */}
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
      {/* render the following component based on the current view */}
      <Shop
      data={store[store.map(item => item.dept).indexOf(view)]}
      />
    </div>
  );
}

export default App;
