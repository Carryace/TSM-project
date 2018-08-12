import React, { Component } from 'react';

class PaperDetailForm extends Component {
  render() {
    return (
      <form>
        <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <input className="input" type="text" placeholder="Author"/>
          </div>
        </div>

        <div className="field">
          <label className="label">IEEE No.</label>
          <div className="control">
            <input className="input" type="text" placeholder="IEEE No."/>
          </div>
        </div>

        <div className="field">
          <label className="label">Keyword</label>
          <div className="control">
            <input className="input" type="text" placeholder="Keyword"/>
          </div>
        </div>

        <div className="field">
          <label className="label">Publisher</label>
          <div className="control">
            <input className="input" type="text" placeholder="Keyword"/>
          </div>
        </div>

        <div className="field">
          <label className="label">Address</label>
          <div className="control">
            <input className="input" type="text" placeholder="Keyword"/>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-info is-focused">Apply</button>
          </div>
          <div className="control">
            <button className="button is-danger is-focused">Reset</button>
          </div>
        </div>
      </form>
    );
  }
}

export default PaperDetailForm;