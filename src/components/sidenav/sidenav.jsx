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
          {this.renderSubLinks(['My Papers', 'Import Reference'])}
          <ul className={'menu-list'}>
            <li>
              <input placeholder="Search Paper/Reference"/>
            </li>
          </ul>
          
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
