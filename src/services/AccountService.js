import {ACCOUNT_API, CUSTOMER_API} from "../common/constants";

export const findAllAccounts = () => {
    return fetch(ACCOUNT_API)
        .then(response => response.json())
};

export const findAccountById = async (accountId) => {
    const response =  await fetch(`${ACCOUNT_API}/${accountId}`)
    return await response.json()
};

export const findAccountsForCustomer = async (customerId) => {
    const response =  await fetch(`${CUSTOMER_API}/${customerId}/accounts`);
    return await response.json()
};
