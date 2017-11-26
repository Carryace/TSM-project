import React from 'react';
import '../styles/index.scss';
import HomePage  from './pages/home/index.jsx';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {

      // <Route path='/roster' component={Roster}/>
      // <Route path='/schedule' component={Schedule}/>
    return (
      <div>
          <Header/>
          <BrowserRouter>
              <Route path='/' component={HomePage}/>
          </BrowserRouter>
          <Footer/>

      </div>

    )
  }
}
