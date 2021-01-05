import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Add } from './components/add';
import { View } from './components/view';
import { Change } from './components/change';

class App extends Component {
  //render method wrapping the entire return
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/view">Characters</Nav.Link>
              <Nav.Link href="/add">Add</Nav.Link>
            </Nav>
          </Navbar>

          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/view' component={View} />
            <Route path='/add' component={Add} />
            <Route path='/change/:id' component={Change}></Route>
          </Switch>

        <Navbar bg="dark" variant="dark">
            <Nav className="m-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/view">Characters</Nav.Link>
              <Nav.Link href="/add">Add</Nav.Link>
            </Nav>
        </Navbar>

        </div>
      </Router>
    );

  }

}

export default App;
