import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SideNav from '../../components/sidenav';


class DailyLogPage extends Component {
  sidenavContent = [
    {
        name: 'Timesheet',
        link: '/',
        subLinks: [
            {name: 'Add Timesheet', link : '/'},
            {name: 'Active Timesheets', link : '/'},
            {name: 'Completed Timesheets', link : '/'},
            {name: 'Daily Log', link: '/daily-log'},
        ],
        backLink: {name: 'Back', link : '/'}
    },
    ];

    render() {
        return (
            <DocumentTitle title={"NSTS | Daily Log"}>
                <div className={"daily-log-page is-fullhd container"}>
                    <div className={"columns"}>
                        <div className={"column is-one-quarter"}>
                            <SideNav sidenavData={this.sidenavContent}></SideNav>
                        </div>
                        <div className={"column is-three-quarters"}>
                            Daily Log Checkbox
                        </div>
                    </div>

                </div>
            </DocumentTitle>
        )
    }
}

module.exports = DailyLogPage;