import React from "react";
import {Link} from 'react-router-dom';

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
                <div className={'mb-4'}>
                    <Link className={'text-dark font-weight-light'} to="/">
                        <u>Back to Customers</u>
                    </Link>
                </div>
                {customer ? <div id="customerDetailsAndAccountsWrapper">
                        <div id="customerDetailsWrapper">
                            <h3>Customer Details</h3>
                            <br/>
                            <form>
                                <div className="form-group row">
                                    <label className="col-form-label col-3 col-lg-2 font-weight-bold" htmlFor="customerId">Customer
                                        Id:</label>
                                    <div className="col-9">
                                    <input className="form-control-plaintext "
                                           id="customerId"
                                           readOnly={true}
                                           disabled={true}
                                           value={customer.id}/>
                                    </div>
                                </div>
                                <div className={"form-group row"}>
                                    <label className="col-form-label col-lg-2 col-3 font-weight-bold" htmlFor="firstName">First
                                        Name:</label>
                                    <div className="col-9">
                                    <input className="form-control-plaintext"
                                           id="firstName"
                                           readOnly={true}
                                           disabled={true}
                                           value={customer.first_name}/>
                                    </div>
                                </div>
                                <div className={"form-group row"}>
                                    <label className="col-form-label col-3 col-lg-2 font-weight-bold" htmlFor="lastName">Last
                                        Name:</label>
                                    <div className="col-9">
                                    <input className="form-control-plaintext"
                                           id="lastName"
                                           readOnly={true}
                                           disabled={true}
                                           value={customer.last_name}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label col-3 col-lg-2 font-weight-bold" htmlFor="email">Email:</label>
                                    <div className="col-9">
                                    <input
                                        className="form-control-plaintext"
                                        id="email"
                                        readOnly={true}
                                        disabled={true}
                                        value={customer.email}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label col-lg-2 col-3 font-weight-bold"
                                           htmlFor="active">Active:</label>
                                    <div className="col-9">
                                    <input
                                        className="form-control-plaintext"
                                        id="active"
                                        readOnly={true}
                                        disabled={true}
                                        value={customer.active ? "True" : "False"}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-3 col-lg-2 col-form-label font-weight-bold" htmlFor="accountManagerId">Account
                                        Manager Id:</label>
                                    <div className="col-9">
                                    <input className="form-control-plaintext"
                                           id="accountManagerId"
                                           readOnly={true}
                                           disabled={true}
                                           value={customer.account_manager_id}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-3 col-lg-2 col-form-label font-weight-bold" htmlFor="reasonForJoining">Reason
                                        for Joining:</label>
                                    <div className="col-9">
                                    <p className="form-control-plaintext" id="reasonForJoining">
                                        {customer.reason_for_joining ? customer.reason_for_joining.trim() : ''}
                                    </p>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-3 col-form-label col-lg-2 font-weight-bold" htmlFor="createdDate">Date
                                        Created:</label>
                                    <div className="col-9">
                                    <input className="form-control-plaintext"
                                           id="createdDate"
                                           readOnly={true}
                                           disabled={true}
                                           value={customer.created_date}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <br/>
                        <div className="mb-4">
                            <AccountTableComponent onCustomerDetails={true} customerId={this.props.customerId}/>
                        </div>
                    </div>
                    : <div>Unable to locate Customer Information</div>}
            </div>
        )
    }
}

export default CustomerDetailsContainer
