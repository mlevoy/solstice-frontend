import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AccountTableComponent from "../components/AccountTableComponent";
import CustomerTableComponent from "../components/CustomerTableComponent";
import CustomerDetailsContainer from "./CustomerDetailsContainer"
import NavComponent from "../components/NavComponent"

const DisplayContainer = () => {
    return (
        <Router>
            <NavComponent/>
            <div className="container-fluid">
                <br/>
                <Route
                    path={"/customers/:customerId"}
                    exact={true}
                    render={(props) =>
                        <CustomerDetailsContainer
                            {...props}
                            customerId={props.match.params.customerId}/>
                    }/>
                <Route
                    path={["/", "/customers"]}
                    exact={true}
                    render={(props) =>
                        <CustomerTableComponent
                            {...props}
                        />
                    }/>
                <Route
                    path="/accounts"
                    exact={true}
                    render={() => <AccountTableComponent/>}/>
            </div>
        </Router>
    )
};

export default DisplayContainer
