import 'bulma/css/bulma.min.css';
import React from "react";
import styled from 'styled-components';

import Header from '../../components/Header';
import TransactionForm from '../../components/TransactionForm';
import { TransferFormData } from '../../components/TransactionForm';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    font-size: 48px;
`

const Transaction = () => {

    const handleTransfer = (data: TransferFormData) => {
        console.log('Transfer data:', data);
        // call API or dispatch action to submit transfer data
      }; 

    return (
        <React.Fragment>
            <Header />
            <Title><b>Virement</b></Title>
            <Wrapper>
              <TransactionForm onSubmit={handleTransfer}/>
            </Wrapper>
        </React.Fragment>
    )
}

export default Transaction;