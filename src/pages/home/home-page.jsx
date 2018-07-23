import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SideNav from '../../components/sidenav/sidenav';
import UserWorkspace from './user-workspace';
import { PaperSuggestion } from './paper-suggestion';

class HomePage extends Component {

  render() {
    return (
      <DocumentTitle title={'NSTS | Home'}>
        <div className={'home-page is-fullhd container'}>
          <div className={'columns'}>
            <div className={'column is-one-quarter'}>
              <SideNav/>
            </div>
            <div className={'column is-three-quarters home-content'}>
              <PaperSuggestion/>
              <UserWorkspace/>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }

}

export default HomePage;