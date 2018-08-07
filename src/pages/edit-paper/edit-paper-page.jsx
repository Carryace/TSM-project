import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SideNav from '../../components/sidenav/sidenav';
import PdfDisplay from '../../components/pdf-display';
import { PaperDetailForm } from './paper-detail-form';

class EditPaperPage extends Component {

  render() {
    return (
      <DocumentTitle title={'NSTS | Edit Paper'}>
        <div className={'edit-paper-page page-margin is-fullhd container'}>
          <div className={'columns'}>
            <div className={'column is-one-quarter'}>
              <SideNav/>
            </div>
            <div className={'column is-three-quarters paper-detail-div'}>
              <div className="block level">
                <div className="level-left">
                  <h1 className="level-item h1">Edit or View Paper Detail </h1>
                </div>
                <div className="level-right">
                  <a className="button is-primary is-pulled-right mr-1"><i className="fa fa-sign-out"></i>&nbsp; Export</a>
                  <a className="button is-primary is-pulled-right"><i className="fa fa-link"></i>&nbsp; Link</a>
                </div>
                </div>
              <div className={'columns'}>
                <div className={'column is-two-thirds'}>
                  <PdfDisplay/>
                </div>
                <div className={'column is-one-third'}>
                  <PaperDetailForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default EditPaperPage;