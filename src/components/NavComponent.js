import React from "react";
import { Link } from 'react-router-dom';


class NavComponent extends React.Component {

    render() {
        const {selected, selectTab} = this.props;
        return (
            <nav className="container-fluid navbar navbar-expand navbar-light d-flex justify-content-start border col-12">
                <Link className="navbar-brand" to="/" onClick={() => selectTab("/")}>Solstice Assessment</Link>
                <div id="navbarContent">
                    <ul className="navbar-nav  mr-auto">
                        <li className="nav-item" onClick={() => selectTab("/")}>
                            <Link to="/" className={(selected === "/" ? "active nav-link": "nav-link")}>
                                Customers
                            </Link>
                        </li>
                        <li className="nav-item" onClick={() => selectTab("/accounts")}>
                            <Link to="/accounts"
                                  className={(selected === "/accounts" ? "active nav-link": "nav-link")}>
                                Accounts
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default NavComponent;
