import React from 'react';
import { Link } from 'react-router-dom';

class SideNav extends React.Component {

  projectLinks = [
    {label: 'Recent Project', url:'/'}, 
    {label: 'Projects list', url:'/'}, 
    {label: 'Create New Project', url:'/'}
  ];

  libraryLinks = [
    {label: 'Recent Edited Paper', url:'/'}, 
    {label: 'Paper Library', url:'/papers'}, 
    {label: 'Import Paper and Reference', url:'/'}  
  ];

  homeLinks = [
    {label: 'Home', url:'/'}, 
    {label: 'My Profile', url:'/papers'}, 
    {label: 'Settings', url:'/'}  
  ]

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <aside className={'sidenav'}>

        <ul className={'is-ul-section menu-list'}>
          <p className={'is-link-section menu-label'}>
            <a>
              <i className="fa fa-home" />&nbsp;My Space
            </a>
          </p>
          {this.renderSubLinks(this.homeLinks)}
        </ul>

        <ul className={'is-ul-section menu-list is-paper-ul-section'}>
          <p className={'is-link-section menu-label'}>
            <a>
              <i className="fa fa-database" />&nbsp;My Library
            </a>
          </p>
          {this.renderSubLinks(this.libraryLinks)}
        </ul>

          
        <ul className={'is-ul-section menu-list is-project-ul-section'}>
          <p className={'is-link-section menu-label'}>
            <a>
              <i className="fa fa-folder-open" />&nbsp;My Projects
            </a>
          </p>
          {this.renderSubLinks(this.projectLinks)}
        </ul>
      </aside>
    );
  }

  renderSubLinks(links) {
    return (
      <ul className={'menu-list'}>
        {links.map(link => {
          return (
            <li key={link.label}>
              <Link to={link.url}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default SideNav;
