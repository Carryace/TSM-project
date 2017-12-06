import React from 'react';
import './style.scss';

class Footer extends React.Component {
    render() {
        return (
            <section className={"footer container is-fullhd hero is-primary"}>
                <div className={"columns"}>
                    <div className={"column has-text-centered"}>
                        <span className={"footer-section-header is-size-4-desktop is-size-5-touch has-text-weight-bold"}>Social Media<br/></span>
                        <span className={"icon-span"}><i className={"fa fa-facebook"}></i></span>
                        <span className={"icon-span"}><i className={"fa fa-google-plus"}></i></span>
                        <span className={"icon-span"}><i className={"fa fa-twitter"}></i></span>
                    </div>
                    <div className={"column has-text-centered"}>
                        <span className={"footer-section-header is-size-4-desktop is-size-5-touch has-text-weight-bold"}>Advertisements<br/></span>
                        <span>Support</span>
                    </div>
                    <div className={"column has-text-centered"}>
                        <span className={"footer-section-header is-size-4-desktop is-size-5-touch has-text-weight-bold"}>Help & About<br/></span>
                        <span>User Guidelines<br/></span>
                        <span>About the Site</span>
                    </div>
                    <div className={"column has-text-centered"}>
                        <span className={"footer-section-header is-size-4-desktop is-size-5-touch has-text-weight-bold"}>Developer Topics<br/></span>
                        <span>Hot Topics<br/></span>
                        <span>Collected Notes<br/></span>
                    </div>
                </div>
            </section>
        )
    }
}

module.exports = Footer;
