import React from "react";
import AccountTableComponent from "../components/AccountTableComponent";
import CustomerDetailItemComponent from "../components/CustomerDetailItemComponent";
import {findCustomersById} from "../services/CustomerService";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

/**
 * Holds the detailed customer info and table of accounts associated with customer
 */
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
        const {customer} = this.state;
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
                                <CustomerDetailItemComponent inputId="customerId" label="Customer Id:" value={customer.id}/>
                                <CustomerDetailItemComponent inputId="firstName" label="First Name:" value={customer.first_name}/>
                                <CustomerDetailItemComponent inputId="lastName" label="Last Name:" value={customer.last_name}/>
                                <CustomerDetailItemComponent inputId="email" label="Email:" value={customer.email}/>
                                <CustomerDetailItemComponent inputId="active" label="Active" value={customer.active ? "True" : "False"}/>
                                <CustomerDetailItemComponent inputId="accountManagerId" label="Account Manager Id:" value={customer.account_manager_id}/>
                                <div className="form-group row">
                                    <label className="col-3 col-lg-2 col-form-label font-weight-bold" htmlFor="reasonForJoining">Reason
                                        for Joining:</label>
                                    <div className="col-9">
                                    <p className="form-control-plaintext" id="reasonForJoining">
                                        {customer.reason_for_joining ? customer.reason_for_joining : ''}
                                    </p>
                                    </div>
                                </div>
                                <CustomerDetailItemComponent inputId="createdDate" label="Date Created:" value={customer.created_date}/>
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
