import {CUSTOMER_API} from "../common/constants"

/**
 *Service for all customer related requests
 */
export const findAllCustomers = () => {
    return fetch(CUSTOMER_API)
        .then(response => response.json())
};

export const findAllCustomersBasicInfo = () => {
    return fetch(`${CUSTOMER_API}-basic`)
        .then(response => response.json())
};

export const findCustomersById = async (customerId) => {
    const response = await fetch(`${CUSTOMER_API}/${customerId}`);
    return await response.json()
};
