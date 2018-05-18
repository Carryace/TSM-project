import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SideNav from '../../components/sidenav';

class DailyLogPage extends Component {
  sidenavContent = [
    {
      name: 'Timesheet',
      link: '/',
      subLinks: [
        { name: 'Add Timesheet', link: '/' },
        { name: 'Active Timesheets', link: '/' },
        { name: 'Completed Timesheets', link: '/' },
        { name: 'Daily Log', link: '/daily-log' }
      ],
      backLink: { name: 'Back', link: '/' }
    }
  ];

  render() {
    return (
      <DocumentTitle title={'NSTS | Daily Log'}>
        <div className={'daily-log-page is-fullhd container'}>
          <div className={'columns'}>
            <div className={'column is-one-quarter'}>
              <SideNav sidenavData={this.sidenavContent} />
            </div>
            <div className={'column is-three-quarters'}>
              <section>
                <h1>Fill Out Daily Acheivements &nbsp; <i className={'fa fa-info-circle'}></i> </h1>

                <div className={'daily-cbx-div columns'} >
                  <div className={'daily-cbx-item column'}>
                    Git Contribution
                    <span>&nbsp;<i className={'fa fa-thumbs-o-up'}></i></span>
                  </div>
                  <div className={'daily-cbx-item column'}>
                    Algorithm Resolve
                    <span>&nbsp;<i className={'fa fa-thumbs-o-up'}></i></span>
                  </div>
                  <div className={'daily-cbx-item column'}>
                    Blog Post
                    <span>&nbsp;<i className={'fa fa-thumbs-o-up'}></i></span>
                  </div>
                  <div className={'daily-cbx-item column'}>
                    Confirm
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

module.exports = DailyLogPage;
