import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SideNav from '../../components/sidenav/sidenav';

class HomePage extends Component {

  topicsContent = [
    {
      date: '2017-12-16',
      title: 'Step by Step SEO for international website',
      labels: ['Angular', 'CSS'],
      abstract:
        'Test Abstract description Lipsum Test Abstract description LipsumTest Abstract description Lipsum Test Abstract description Lipsum Test Abstract description Lipsum',
      author: ['Author Nathan', 'Author Nathan1']
    },
    {
      date: '2017-12-16',
      title: 'Step by Step SEO for international website',
      labels: ['Angular', 'Technology'],
      abstract:
        'Test Abstract description Lipsum Test Abstract description LipsumTest Abstract description Lipsum Test Abstract description Lipsum Test Abstract description Lipsum',
      author: ['Author Nathan', 'Author Nathan1']
    }
  ];

  labels = ['Technology', 'CSS'];

  render() {
    return (
      <DocumentTitle title={'NSTS | Home'}>
        <div className={'home-page is-fullhd container'}>
          <div className={'columns'}>
            <div className={'column is-one-quarter'}>
              <SideNav/>
            </div>
            <div className={'column is-three-quarters home-content'}>
              {this.renderHotPaper()}
              {this.renderUserWorkspace()}
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }

  renderHotPaper() {
    return (
      <section className={'hot-paper-section'}>
        <h1 className="h1 topic-title">
          Hot Related Paper Suggestions &nbsp;
          {/* <a><i class="fa fa-cog"></i></a>   */}
        </h1>
        <div className="hot-paper-list columns">
          {this.topicsContent.map(paper => this.renderPaperItem(paper))}
        </div>        
      </section>
    );
  }

  renderPaperItem(paperInfo) {
    return (
      <div class="hot-paper-item column is-half">
        <h2 class="hot-paper-title">{paperInfo.title}</h2>
        <p>
            <span class="item-time-author">
              By <b>{paperInfo.author.join(',')}</b> on {paperInfo.date}
            </span> <br/>
            <div class="field is-grouped is-grouped-multiline paper-keyword-div">
              {paperInfo.labels.map(label => this.renderLabel(label))}
            </div>
        </p>
      </div>
    );
  }

  renderUserWorkspace() {
    return (
      <section className={'user-workspace-section'}>
        <h1 className="h1 topic-title">My Workspace</h1>
        <div class="columns">
          <nav class="panel column is-two-thirds">
            <p class="panel-heading">
              Edited Recent
            </p>
            <div class="panel-block inline-citation-div active-citation-div">
              bulma
            </div>
            <div class="panel-block inline-citation-div">
              marksheet
            </div>
          </nav>
          <div class="panel column is-one-third"> 
            <p class="panel-heading">
              Selected Paper Detail
            </p>
            <div class="panel-block">
              <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Value</th>
                  </tr> 
                </thead>
                <tbody>
                  <tr>
                    <td>Author</td>
                    <td>Nathan Sun</td>
                  </tr>
                  <tr>
                    <td>Author</td>
                    <td>Nathan Sun</td>
                  </tr>
                </tbody>
              </table>         
            </div>
            <div class="panel-block">
              <button class="button is-link is-outlined is-fullwidth">
                Edit Paper Details
              </button>
            </div>
          </div>
        </div>
        
      </section>
    )
  }

  renderLabel(label) {
    return (
      <div class="control" key={label}>
        <div class="tags has-addons">
          <a class="tag is-link">{label}</a>
        </div>
      </div>
    );
  }

}

export default HomePage;