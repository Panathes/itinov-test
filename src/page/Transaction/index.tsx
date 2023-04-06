import 'bulma/css/bulma.min.css';
import React, { useContext } from "react";
import styled from 'styled-components';
import CurrentUserAccounts from '../../context';
import { useNavigate } from 'react-router-dom';
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
    const accountList = useContext(CurrentUserAccounts)
    const navigate = useNavigate();
    const handleTransfer = (data: TransferFormData) => {
        const creditAccount = accountList?.find((item: { nameAccount: any; }) => item.nameAccount === data.firstAccount);
        const debitAccount = accountList?.find((item: { nameAccount: any; }) => item.nameAccount === data.secondAccount);

        // eslint-disable-next-line array-callback-return
        accountList?.map(account => {
            if (account.nameAccount === creditAccount?.nameAccount ) {
                return account.balanceAccount = account.balanceAccount - data.amount
            }
            if (account.nameAccount === debitAccount?.nameAccount ) {
                return account.balanceAccount +=  Number(data.amount)
            }
        })
        navigate(`/`)
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