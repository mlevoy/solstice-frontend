import React from "react"
import styled from "styled-components";
import PropTypes from "prop-types";


/**
 * Component for customer details - includes a label and a disabled input field
 */
const CustomerDetailItemComponent = (props) => {
    const {inputId, value, label} = props;
    return (
        <div className="form-group row">
            <label className="col-form-label col-3 col-lg-2 font-weight-bold" htmlFor={inputId}>{label}</label>
            <div className="col-9">
                <DisabledInput className="form-control-plaintext"
                               id={inputId}
                               readOnly={true}
                               disabled={true}
                               value={value}/>
            </div>
        </div>
    )
};

CustomerDetailItemComponent.propType = {
    inputId: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}


const DisabledInput = styled.input`
     -webkit-text-fill-color: black //Override Safari's lighter font color on disabled inputs
`;

export default CustomerDetailItemComponent
