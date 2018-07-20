import React from 'react';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar1.png';

class Header extends React.Component {
    render() {
        return (
            <div className={"header-navbar container is-fullhd is-primary"}>
                <div className={"columns"}>
                    <div className={"column is-three-quarters"}>
                        <img src={logo} alt={"logo"} className={"header-logo pull-left"}/>
                        <span className={"header-logo-text pull-left"}>NSTS</span>
                        <div className={"header-input-div"}><input className={"header-input"} type="text" placeholder="Search project"/></div>

                        <a className={"button is-primary is-hidden-touch"}>Timesheet</a>
                        <a className={"button is-primary is-hidden-touch"}>Report</a>
                        <a className={"button is-primary is-hidden-touch"}>Expense</a>
                    </div>
                    <div className={"column"}>
                        <a className={"button is-primary is-hidden-tablet"}>Timesheet</a>
                        <a className={"button is-primary is-hidden-tablet"}>Report</a>
                        <a className={"button is-primary is-hidden-tablet"}>Expense</a>


                        <span className={"header-user-text pull-right"}><i className={"fa fa-sort-desc"}></i></span>
                        <img src={avatar} alt={"avatar"} className={"avatar-img pull-right"}/>
                        <span className={"header-user-text is-hidden-touch pull-right"}>Nathan<i className={"fa fa-sort-desc"}></i></span>
                        <a className={"button is-primary is-hidden-mobile is-hidden-desktop pull-right"}><i className={"fa fa-cog"}></i></a>
                        <a className={"button is-primary is-hidden-mobile is-hidden-desktop pull-right"}><i className={"fa fa-bars"}></i></a>

                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
