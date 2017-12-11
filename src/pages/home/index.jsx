import React, { Component } from "react";
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

    topicsContent = [
        {
            title:'Test Lipsum Title',
            label:['Angular'],
            abstract:'Test Abstract description Lipsum Test Abstract description LipsumTest Abstract description Lipsum Test Abstract description Lipsum Test Abstract description Lipsum'
        }
    ];
    
    render() {
        return (
            <DocumentTitle title={"NSTS | Home"}>
                <div className={"home-page is-fullhd container"}>
                    <div className={"columns"}>
                        <div className={"column is-one-quarter"}>
                            <SideNav sidenavData={this.sidenavContent}></SideNav>
                        </div>
                        <div className={"column"}>
                            { this.renderTopicContents()}
                        </div>
                    </div>

                </div>
            </DocumentTitle>
        )
    }

    renderTopicContents(){
        return (
            <div className={"container"}>
                {this.topicsContent.map( item => { return
                        <h2 className={"h2"}>{item.title}</h2>
                    ;})}
            </div>);
    }


}

module.exports = HomePage;
