import React from "react";
import {findAllAccounts, findAccountsForCustomer} from "../services/AccountService"
import PropTypes from 'prop-types';


class AccountTableComponent extends React.Component {
    static propTypes = {
        onCustomerDetails: PropTypes.bool,
        customerId: PropTypes.string,
    };

    constructor (props) {
        super(props);
        this.state = {
            accounts: undefined
        };
    }

    componentDidMount() {
        if(this.props.onCustomerDetails){
            findAccountsForCustomer(this.props.customerId).then(accounts => this.setState({accounts: accounts}))
        }
        else{
            findAllAccounts().then(accounts => this.setState({accounts: accounts}))
        }
    }

    render() {
        const { accounts } = this.state;
        return (
            <div>
                <h3>Accounts</h3>
                <br/>
                {!!(accounts && accounts.length)? <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        {!this.props.onCustomerDetails && <th>Customer Id</th>}
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Solar Farm Id</th>
                        <th>Capacity Share</th>
                        <th>Date Created</th>
                    </tr>
                    </thead>

                    <tbody>
                    {accounts &&
                    accounts.map((account) => {
                        return <tr key={account.id}>
                            <td>{account.id}</td>
                            {!this.props.onCustomerDetails && <td>{account.customer_id}</td>}
                            <td>{account.address}</td>
                            <td>{account.city}</td>
                            <td>{account.state}</td>
                            <td>{account.solar_farm_id}</td>
                            <td>{account.capacity_share}</td>
                            <td>{account.created_date}</td>
                        </tr>})
                    }
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>: <div>No Accounts Found</div>}
            </div>
        )
    }
}
export default AccountTableComponent
