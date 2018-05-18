import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SideNav from '../../components/sidenav';

class HomePage extends Component {
  sidenavContent = [
    {
      name: 'Timesheet',
      link: '/',
      subLinks: [
        { name: 'Add Timesheet', link: '/' },
        { name: 'Active Timesheets', link: '/' },
        { name: 'Completed Timesheets', link: '/' },
        { name: 'Daily Log', link: '/daily-log' }
      ]
    },
    {
      name: 'Reports',
      link: '/',
      subLinks: [
        { name: 'Run Reports', link: '/' },
        { name: 'Search Reports', link: '/' },
        { name: 'Export Reports', link: '/' }
      ]
    },
    {
      name: 'Topics',
      link: '/',
      subLinks: [
        { name: 'Latest Updated', link: '/' },
        { name: 'Hot Topics', link: '/' },
        { name: 'Create Your Topic', link: '/' }
      ]
    }
  ];

  topicsContent = [
    {
      createdTime: '2017-12-16',
      title: 'Step by Step SEO for international website',
      label: ['Angular'],
      abstract:
        'Test Abstract description Lipsum Test Abstract description LipsumTest Abstract description Lipsum Test Abstract description Lipsum Test Abstract description Lipsum',
      author: 'Nathan'
    },
    {
      createdTime: '2017-12-16',
      title: 'Step by Step SEO for international website',
      label: ['Angular'],
      abstract:
        'Test Abstract description Lipsum Test Abstract description LipsumTest Abstract description Lipsum Test Abstract description Lipsum Test Abstract description Lipsum',
      author: 'Nathan'
    }
  ];

  render() {
    return (
      <DocumentTitle title={'NSTS | Home'}>
        <div className={'home-page is-fullhd container'}>
          <div className={'columns'}>
            <div className={'column is-one-quarter'}>
              <SideNav sidenavData={this.sidenavContent} />
            </div>
            <div className={'column is-three-quarters'}>
              {this.renderTopicContents()}
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }

  renderTopicContents() {
    return (
      <section className={'hero'}>
        {this.topicsContent.map(item => {
          return (
            <div className={'hero-body'} key={item.title}>
              <div>
                <span className={'update-time-span'}>
                  Posted by {item.author} on {item.createdTime}
                </span>
              </div>
              <h1 className={'h1 topic-title'}>{item.title}</h1>
              <div>
                <a className={'button is-info is-outlined'}>
                  Read More &nbsp; <i className={'fa fa-angle-double-right'} />
                </a>
              </div>
              <p className={'topic-description'}>{item.abstract}</p>
            </div>
          );
        })}
      </section>
    );
  }
}

module.exports = HomePage;
