import React from 'react';

class SideNav extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <aside className={'sidenav'}>
        <ul className={'is-ul-section menu-list'}>
          <p className={'is-link-section menu-label'}>
            <a>
              <i className="fa fa-database" />&nbsp;My Library
            </a>
          </p>
          {this.renderSubLinks(['Recent Edited Papers', 'Paper Library', 'Import Paper and Reference'])}
        </ul>

          
        <ul className={'is-ul-section menu-list is-project-ul-section'}>
          <p className={'is-link-section menu-label'}>
            <a>
              <i className="fa fa-folder-open" />&nbsp;My Projects
            </a>
          </p>
          {this.renderSubLinks(['Recent Project', 'Projects list', 'Create New Project'])}
        </ul>
      </aside>
    );
  }

  renderSubLinks(linkNames) {
    return (
      <ul className={'menu-list'}>
        {linkNames.map(link => {
          return (
            <li key={link}>
              <a>{link}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default SideNav;
