import React, { Component } from 'react';
import PaperItem from './paper-item';

class PaperSuggestion extends Component {

  topicsContent = [
    {
      date: '2017-12-16',
      title: 'Step by Step SEO for international website',
      labels: ['Angular', 'CSS'],
      abstract:
        'Test Abstract description Lipsum Test Abstract description LipsumTest Abstract description Lipsum Test Abstract description Lipsum Test Abstract description Lipsum',
      author: ['Author Nathan', 'Author Nathan1'],
      pubId: 1
    },
    {
      date: '2017-12-16',
      title: 'Step by Step SEO for international website',
      labels: ['Angular', 'Technology'],
      abstract:
        'Test Abstract description Lipsum Test Abstract description LipsumTest Abstract description Lipsum Test Abstract description Lipsum Test Abstract description Lipsum',
      author: ['Author Nathan', 'Author Nathan1'],
      pubId: 2
    }
  ];

  labels = ['Technology', 'CSS'];

  render() {
    return (
      <section className={'hot-paper-section'}>
        <h1 className="h1 topic-title">
          Hot Related Paper Suggestions &nbsp;
          {/* <a><i class="fa fa-cog"></i></a>   */}
        </h1>
        <div className="hot-paper-list columns">
          {this.topicsContent.map(paper => {
            return (
              <PaperItem data={paper} key={paper.pubId}/>
            )
          })}
        </div>        
      </section>
    );
  }
}

export default PaperSuggestion;