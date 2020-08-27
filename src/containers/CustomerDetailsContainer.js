import React from "react";
import AccountTableComponent from "../components/AccountTableComponent";
import {findCustomersById} from "../services/CustomerService";
import PropTypes from "prop-types";

class CustomerDetailsContainer extends React.Component {
    static propTypes = {
        customerId: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            customer: undefined
        };
    }

    componentDidMount() {
        findCustomersById(this.props.customerId).then(customer => this.setState({customer: customer}))
    }

    render() {
        const {customer} = this.state
        return (
            <div>
                {customer ? <div id="customerDetailsAndAccountsWrapper">
                    <div id="customerDetailsWrapper" className="container-fluid">
                        <h3>Customer Details</h3>
                        <br/>
                        <form>
                            <div className="form-group row">
                                <label className="col-form-label col-3" htmlFor="customerId">Customer Id:</label>
                                <input className="form-control-plaintext col-9"
                                       id="customerId"
                                       readOnly={true}
                                       disabled={true}
                                       value={customer.id}/>
                            </div>
                            <div className={"form-group row"}>
                                <label className="col-form-label col-3" htmlFor="firstName">First Name:</label>
                                <input className="col-9 form-control-plaintext"
                                       id="firstName"
                                       readOnly={true}
                                       disabled={true}
                                       value={customer.first_name}/>
                            </div>
                            <div className={"form-group row"}>
                                <label className="col-form-label col-3" htmlFor="lastName">Last Name:</label>
                                <input className="form-control-plaintext col-9"
                                       id="lastName"
                                       readOnly={true}
                                       disabled={true}
                                       value={customer.last_name}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-3" htmlFor="email">Email:</label>
                                <input
                                    className="form-control-plaintext col-9"
                                    id="email"
                                    readOnly={true}
                                    disabled={true}
                                    value={customer.email}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-3" htmlFor="active">Active:</label>
                                <input
                                    className="form-control-plaintext col-9"
                                    id="active"
                                    readOnly={true}
                                    disabled={true}
                                    value={customer.active ? "True" : "False"}/>
                            </div>
                            <div className="form-group row">
                                <label className="col col-form-label" htmlFor="accountManagerId">Account Manager Id:</label>
                                <input className="form-control-plaintext col-9"
                                       id="accountManagerId"
                                       readOnly={true}
                                       disabled={true}
                                       value={customer.account_manager_id}/>
                            </div>
                            <div className="form-group row">
                                <label className="col col-form-label" htmlFor="reasonForJoining">Reason for Joining:</label>
                                <p className="form-control-plaintext col-9" id="reasonForJoining">
                                          {customer.reason_for_joining? customer.reason_for_joining.trim() : ''}
                                </p>
                            </div>
                            <div className="form-group row">
                                <label className="col col-form-label" htmlFor="createdDate">Date Created:</label>
                                <input className="form-control-plaintext col-9"
                                       id="createdDate"
                                       readOnly={true}
                                       disabled={true}
                                       value={customer.created_date}/>
                            </div>
                        </form>
                    </div>
                        <br/>
                        <AccountTableComponent onCustomerDetails={true} customerId={this.props.customerId}/>
                    </div>
                    : <div>Unable to locate Customer Information</div>}
            </div>
        )
    }
}

export default CustomerDetailsContainer
