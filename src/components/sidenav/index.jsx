import React from 'react';

class SideNav extends React.Component {
    
    sectionClassMapping = {
      'Timesheet': {
          sectionClass: 'is-ts-ul-section',
          iconClass: 'fa-calendar',
          linkText: 'More Timesheets'
      },
      'Reports': {
          sectionClass: 'is-reports-ul-section',
          iconClass: 'fa-line-chart',
          linkText: 'Learn More'
      },
      'Topics': {
          sectionClass: 'is-topics-ul-section',
          iconClass: 'fa-paper-plane-o',
          linkText: 'All Topics'
      }
    };
    
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <aside className={"sidenav"}>
                {this.renderSidenavSectionLinks(this.props.sidenavData)}
            </aside>
        )
    }

    renderSidenavSectionLinks(data){
        return data.map( (e,i) => {
            return (
                <ul className={"is-ul-section menu-list " + this.getLinkSectionClassName(e.name)} key={e.name+'-'+i}>
                    <p className={"is-link-section menu-label"}><a><i className={"fa " + this.getLinkSectionIconClassName(e.name)}></i>&nbsp;{e.name}</a></p>
                    <li>{this.renderSidenavSubLinks(e.subLinks)}</li>
                    <a className={"redirect-link has-text-right"}>{this.sectionClassMapping[e.name].linkText}&nbsp;<i className={"fa fa-chevron-right"}></i></a>
                </ul>);
        });
    }

    renderSidenavSubLinks(data){
        if(data){
            return (
                <ul className={"is-ul-subsection menu-list"} >
                    {data.map((e,i) => { return (<li key={'sublink-'+e.name+'-'+i}><a>{e.name}</a></li>);})}
                </ul>
            );

        }
    }

    getLinkSectionClassName(sectionName){return this.sectionClassMapping[sectionName].sectionClass;}
    getLinkSectionIconClassName(sectionName){return this.sectionClassMapping[sectionName].iconClass;}
    
}

module.exports = SideNav;
