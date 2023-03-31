import 'bulma/css/bulma.min.css';
import React from "react";
import styled from 'styled-components';

interface Transaction {
    id: number;
    date: string;
    description: string;
    amount: number;
  }
  
  interface Props {
    transactions: Transaction[];
  }
  
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 80%;
    border-radius: 5px;

  `;
  
  const TransactionItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
  `;
  
  const Description = styled.div`
    font-weight: bold;
  `;
  
  const Amount = styled.div<{ isExpense: boolean }>`
    font-weight: bold;
    color: ${props => props.isExpense ? 'red' : 'lightgreen'}
  `;

const TransactionList = ({transactions}:Props) => {
    return (
        <Container>
          {transactions.map(transaction => (
            <TransactionItem key={transaction.id} >
              <Description>{transaction.description}</Description>
              <Amount isExpense={transaction.amount < 0}>{transaction.amount}</Amount>
            </TransactionItem>
          ))}
        </Container>
      );
}

export default TransactionList;