import 'bulma/css/bulma.min.css';
import React from "react";
import styled from 'styled-components'
import Header from '../../components/Header';
import TransactionTable from '../../components/TransactionTable';

const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    font-size: 48px;
`

const transactions = [
    { id: 1, date: '2022-01-01', wording: 'Paycheck', amount: 5000 },
    { id: 2, date: '2022-01-05', wording: 'Rent', amount: -1000 },
    { id: 3, date: '2022-01-10', wording: 'Groceries', amount: -200 },
    { id: 4, date: '2022-01-15', wording: 'Dinner with friends', amount: -100 },
    { id: 5, date: '2022-01-20', wording: 'Gas', amount: -50 },
  ];


const Operations = () => {
    return (
        <React.Fragment>
            <Header />
            <Title><b>Opérations</b></Title>
            <TransactionTable transactions={transactions}/>
        </React.Fragment>
    )
}

export default Operations;