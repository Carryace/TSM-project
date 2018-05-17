import React from 'react';
import '../styles/index.scss';
import HomePage from './pages/home/index.jsx';
import AboutPage from './pages/about/index.jsx';
import DailyLogPage from './pages/daily-log/index.jsx';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
  render() {

      // <Route path='/roster' component={Roster}/>
      // <Route path='/schedule' component={Schedule}/>
    return (
      <div>
          <Header/>
          <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={HomePage}/>
                  <Route path='/home' component={HomePage}/>
                  <Route path='/about' component={AboutPage}/>
                  <Route path='/daily-log' component={DailyLogPage}/>
              </Switch>

          </BrowserRouter>
          <Footer/>

      </div>

    )
  }
}
