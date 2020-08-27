import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AccountTableComponent from "../components/AccountTableComponent";
import CustomerTableComponent from "../components/CustomerTableComponent";
import CustomerDetailsContainer from "./CustomerDetailsContainer"
import NavComponent from "../components/NavComponent"

class DisplayContainer extends React.Component {
    componentDidMount() {
        this.setState({selectedTab: window.location.pathname})
    }

    state = {
        selectedTab: "/",
    };

    selectTab = (tab) => {
        if (this.state.selectedTab !== tab) {
            this.setState({selectedTab: tab})
        }
    };

    render() {
        const {selectedTab} = this.state;
        return (
            <div>
                <Router>
                    <div>
                        <NavComponent selected={selectedTab} selectTab={(tab) => this.selectTab(tab)}/>
                        <br/>
                        <Route
                            path="/c:customerId"
                            exact={true}
                            render={(props) =>
                                <CustomerDetailsContainer
                                    {...props}
                                    customerId={props.match.params.customerId}/>
                            }/>
                        <Route
                            path="/"
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
            </div>
        )
    }
}

export default DisplayContainer
