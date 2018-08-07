import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SideNav from '../../components/sidenav/sidenav'; 

class PaperLibraryPage extends Component {
  render() {
    return (
      <DocumentTitle title={'NSTS | Paper Library'}>
        <div className={'paper-library-page page-margin is-fullhd container'}>
          <div className={'columns'}>
            <div className={'column is-one-quarter'}>
              <SideNav/>
            </div>
            <div className={'column is-three-quarters'}>
              <h1 className="h1">My Paper Library</h1>
              <table className="table is-striped is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    <th width="40">Title</th>
                    <th width="20">Author</th>
                    <th width="10">Year</th>
                    <th width="10">Conf</th>
                    <th width="10">IEEE No.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Title for paper TTTTTTTTTTT TTTTTTTTTTT TTTT TTTT TTTT TTTTT TTTTT TTTTT TTTT</td>
                    <td>Nathan Sun, Tony D.Sh</td>
                    <td>2018</td>
                    <td>IEEE</td>
                    <td>13239230</td>
                  </tr>
                  <tr>
                    <td>Title for paper</td>
                    <td>Nathan Sun, Tony D.Sh</td>
                    <td>2018</td>
                    <td>IEEE</td>
                    <td>13239230</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default PaperLibraryPage;