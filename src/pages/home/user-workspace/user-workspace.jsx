import React, { Component } from 'react';


class UserWorkspace extends Component {

  render() {
    return (
      <section className={'user-workspace-section'}>
        <h1 className="h1 topic-title">My Workspace</h1>
        <div className="columns user-workspace-content">
          <nav className="panel column is-two-thirds">
            <p className="panel-heading">
              Edited Recent
            </p>
            <div className="panel-block active-citation-div">
              bulma
            </div>
            <div className="panel-block inline-citation-div">
              marksheet
            </div>
          </nav>
          <div className="panel column is-one-third"> 
            <p className="panel-heading">
              Selected Paper Detail
            </p>
            <div className={'panel-block paper-title-block'}>
              Display Paper Title Here
            </div>
            <div className="panel-block">
              <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <tbody>
                  <tr>
                    <td>Author</td>
                    <td>Nathan Sun</td>
                  </tr>
                  <tr>
                    <td>Publisher</td>
                    <td>Nathan Sun</td>
                  </tr>
                  <tr>
                    <td>Year</td>
                    <td>Nathan Sun</td>
                  </tr>
                  <tr>
                    <td>Series</td>
                    <td>Nathan Sun</td>
                  </tr>
                </tbody>
              </table>         
            </div>
            <div className="panel-block">
              <button className="button is-link is-outlined is-fullwidth">
                Edit Paper Details
              </button>
            </div>
          </div>
        </div>
        
      </section>
    )
  }

}

export default UserWorkspace;