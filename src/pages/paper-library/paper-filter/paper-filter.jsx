import React, { Component } from 'react';

class PaperFilter extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-two-thrids">
          <div className="field has-addons">
            <p className="control">
              <span className="select">
                <select>
                  <option>Keyword</option>
                  <option>Title</option>
                  <option>Year</option>
                  <option>Author</option>
                </select>
              </span>
            </p>
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="Search Paper/Reference"/>
            </p>
            <p className="control">
              <a className="button is-primary">
                Search
              </a>
            </p>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="field has-addons">
            <div className="control">
              <div className="select is-fullwidth">
                <select name="order">
                  <option value="date">Date</option>
                  <option value="alphabet">Alphabet</option>
                </select>
              </div>
            </div>
            <div className="control">
              <button type="submit" className="button is-primary">Sort &nbsp;<i className="fa fa-sort-amount-asc"></i></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PaperFilter;