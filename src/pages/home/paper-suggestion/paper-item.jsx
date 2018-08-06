import React, { Component } from 'react';

class PaperItem extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let paperInfo = this.props.data;
    return (
      <div className="hot-paper-item column is-half">
        <h2 className="hot-paper-title">{paperInfo.title}</h2>
        <div>
            <span className="item-time-author">
              By <b>{paperInfo.author.join(',')}</b> on {paperInfo.date}
            </span> <br/>
            <div className="field is-grouped is-grouped-multiline paper-keyword-div">
              {paperInfo.labels.map(label => this.renderLabel(label))}
            </div>
        </div>
      </div>
    );
  }

  renderLabel(label) {
    return (
      <div className="control" key={label}>
        <div className="tags has-addons">
          <a className="tag is-link">{label}</a>
        </div>
      </div>
    );
  }
}

export default PaperItem;