import React from "react";
import {Link, withRouter} from 'react-router-dom';

/**
 * Component for top navbar
 * Contains a brand element, which becomes hidden on smaller screens, and links for Accounts and Customers
 */
const NavComponent = (props) => {

    const selected = props.location.pathname;

    return (
        <nav className="navbar navbar-expand navbar-light border">
            <Link className="navbar-brand d-none d-sm-flex" to="/">Solstice Assessment</Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/"
                          className={((selected === "/" || selected.startsWith("/customers")) ? "active nav-link" : "nav-link")}>
                        Customers
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/accounts"
                          className={(selected === ('/accounts') ? "active nav-link" : "nav-link")}>
                        Accounts
                    </Link>
                </li>
            </ul>
        </nav>

    )
};

export default withRouter(NavComponent);
