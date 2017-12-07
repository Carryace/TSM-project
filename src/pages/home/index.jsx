import React, { Component } from "react";import './style.scss';
import DocumentTitle from 'react-document-title';
import SideNav from '../../components/sidenav';

class HomePage extends Component {

    sidenavContent = [
        {
            name: 'Timesheet',
            link: '/',
            subLinks: [
                {name: 'Add Timesheet', link : '/'},
                {name: 'Active Timesheets', link : '/'},
                {name: 'Completed Timesheets', link : '/'}
            ]
        },
        {
            name: 'Reports',
            link: '/',
            subLinks: [
                {name: 'Run Reports', link : '/'},
                {name: 'Search Reports', link : '/'},
                {name: 'Export Reports', link : '/'}
            ]
        },
        {
            name: 'Topics',
            link: '/',
            subLinks: [
                {name: 'Latest Updated', link : '/'},
                {name: 'Hot Topics', link : '/'},
                {name: 'Create Your Topic', link : '/'}
            ]
        },
    ];
    
    render() {
        return (
            <DocumentTitle title={"NSTS | Home"}>
                <div className={"home-page is-fullhd container"}>
                    <div classNmae={"columns"}>
                        <div className={"column is-one-quarter"}>
                            <SideNav sidenavData={this.sidenavContent}></SideNav>
                        </div>
                        <div className={"column"}></div>
                    </div>

                </div>
            </DocumentTitle>
        )
    }


}

module.exports = HomePage;
