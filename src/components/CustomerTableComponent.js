import React from "react";
import {findAllCustomersBasicInfo} from "../services/CustomerService"
import styled from "styled-components";

/**
 * Component holding a table of all customer ids, first names, and last names.
 * Rows are clickable and lead to the individual customer profile.
 */
class CustomerTableComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            customers: undefined
        };
    }

    componentDidMount() {
        findAllCustomersBasicInfo().then(customers => this.setState({customers: customers}))
    }


    handleClick = (id) => {
        this.props.history.push(`/customers/${id}`)
    };

    render() {
       const { customers } = this.state;
        return (
            <div>
                <h3>Customers</h3>
                <br/>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>

                    <tbody>
                    {customers &&
                        customers.map((customer) => {
                            return <ClickableTableItem key={customer.id} onClick={()=>this.handleClick(customer.id)}>
                                <td>{customer.id}</td>
                                <td>{customer.first_name}</td>
                                <td>{customer.last_name}</td>
                                <td>{customer.email}</td>
                            </ClickableTableItem>
                        })
                    }
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const ClickableTableItem = styled.tr`
    cursor: pointer;
`;


export default CustomerTableComponent
