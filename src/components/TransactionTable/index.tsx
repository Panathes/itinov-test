import React from "react";
import styled from 'styled-components';

export interface Transaction  {
    id: number;
    date: string;
    wording: string;
    amount: number
} 

interface Props {
    transactions: Transaction[] | undefined;
}

const Wrapper = styled.div`
    margin-top: 10px;
`

const Amount = styled.p<{ isExpense: boolean }>`
    color: ${props => props.isExpense ? '#ff1b1c' : '#87ff65'}
`;

const TransactionTable = ({transactions}: Props) => {
    return (       
        <Wrapper>
            <div className="table-container">
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Libellé</th>
                            <th>Montant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions?.map(transaction => (
                        <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td><b>{transaction.wording}</b></td>
                        <td><Amount isExpense={transaction.amount < 0}>{transaction.amount} €</Amount></td>
                        </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </Wrapper>
    )
}

export default TransactionTable;