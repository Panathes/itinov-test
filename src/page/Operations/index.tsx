import 'bulma/css/bulma.min.css';
import React, { useState } from "react";
import styled from 'styled-components'
import Header from '../../components/Header';
import TransactionTable from '../../components/TransactionTable';
import { fakeData } from '../../asset/fakeData';
import { useParams } from 'react-router-dom';

const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    font-size: 48px;
`


const Operations = () => {
    const [data] = useState(fakeData);
    // const [operationsList] = useRef(data.find((item: { numberAccount: any; }) => item.numberAccount === userNumberAccount.id)?.operationAccount)
    let  userNumberAccount  = useParams();
    const operationsList = data.find((item: { numberAccount: any; }) => item.numberAccount === userNumberAccount.id)?.operationAccount

    return (
        <React.Fragment>
            <Header />
            <Title><b>Opérations</b></Title>
            <TransactionTable transactions={operationsList}/>
        </React.Fragment>
    )
}

export default Operations;