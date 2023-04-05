import { createContext } from 'react';

export interface Account {
    id: number;
    nameAccount: string;
    numberAccount: string;
    balanceAccount: number;
    operationAccount: {
        id: number;
        date: string;
        wording: string;
        amount: number;
    }[]
}

const CurrentUserAccounts = createContext<Account[] | null>(null)

export default CurrentUserAccounts;