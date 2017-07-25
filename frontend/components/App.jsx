import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Manifesto from './modal/manifesto_modal.jsx';
import NavbarContainer from './navbar/navbar_container';
import BusinessIndexContainer from './businesses/business_index_container';
import SearchBarContainer from './searchbar/searchbar_container';
// import AuthRoute from '../util/route_util.jsx'

const App = () => (
  <div>
    <Manifesto />
    <header>
      <Link to="/">
        <span>
          <p id="titlep1">street</p>
          <p id="titlep2" >curious</p>
        </span>
      </Link>
      <NavbarContainer />
    </header>
    <div className="maintext">
      {/* <button onClick={() => { this.props.history.push(`/businesses`) }}></button>
       <Route path='/businesses' component={BusinessIndexContainer} />  */}
      <p className="search1">
        <SearchBarContainer />
      </p>
      <p className="search2">
        <SearchBarContainer />
      </p>
      <p className="search3">
        <SearchBarContainer />
      </p>
      <Route path="/test" component={BusinessIndexContainer} />
    </div>
  </div>
);

export default App;


// <Route path="/login" component={SessionFormContainer} />
// <Route path="/signup" component={SessionFormContainer} />