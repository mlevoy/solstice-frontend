import React from "react";
import { Link, withRouter } from 'react-router-dom';


 const NavComponent = (props) => {

    const selected = props.location.pathname;

        return (
            <nav className="navbar navbar-expand navbar-light border w-100">
                <Link className="navbar-brand" to="/">Solstice Assessment</Link>
                <div id="navbarContent">
                    <ul className="navbar-nav  mr-auto">
                        <li className="nav-item">
                            <Link to="/"
                                  className={((selected === "/" || selected.startsWith("/customers")) ? "active nav-link": "nav-link")}>
                                Customers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/accounts"
                                  className={(selected === ('/accounts')? "active nav-link": "nav-link")}>
                                Accounts
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
};

export default withRouter(NavComponent);
