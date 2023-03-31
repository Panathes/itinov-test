import 'bulma/css/bulma.min.css';
import React from "react";
import styled from 'styled-components'
import Header from '../../components/Header';
import TransactionList from '../../components/TransactionList';

const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    font-size: 48px;
`

const transactions = [
    { id: 1, date: '2022-01-01', description: 'Paycheck', amount: 5000 },
    { id: 2, date: '2022-01-05', description: 'Rent', amount: -1000 },
    { id: 3, date: '2022-01-10', description: 'Groceries', amount: -200 },
    { id: 4, date: '2022-01-15', description: 'Dinner with friends', amount: -100 },
    { id: 5, date: '2022-01-20', description: 'Gas', amount: -50 },
  ];


const Operations = () => {
    return (
        <React.Fragment>
            <Header />
            <Title><b>Opérations</b></Title>
            <TransactionList transactions={transactions}/>
        </React.Fragment>
    )
}

export default Operations;