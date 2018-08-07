import React from 'react';
import '../styles/index.scss';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import DailyLogPage from './pages/daily-log';
import EditPaperPage from './pages/edit-paper';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaperLibraryPage from './pages/paper-library/paper-library-page';

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
                  <Route path='/papers' component={PaperLibraryPage}/>
                  <Route path='/paper/:id' component={EditPaperPage}/>
              </Switch>

          </BrowserRouter>
          <Footer/>

      </div>

    )
  }
}
