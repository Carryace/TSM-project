import React from 'react';
import DocumentTitle from 'react-document-title';

class AboutPage extends React.Component {
    render() {
        return (
            <DocumentTitle title={"NSTS | About"}>
                <div>
                    About
                </div>
            </DocumentTitle>
        )
    }
}

module.exports = AboutPage;
