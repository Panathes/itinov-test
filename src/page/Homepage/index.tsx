import 'bulma/css/bulma.min.css';
import React, { useState } from "react";
import Header from '../../components/Header';
import styled from 'styled-components';
import Card from '../../components/Card';
import { fakeData } from '../../asset/fakeData';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
`

const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    font-size: 48px;
`

const Homepage = () => {
    const [cardInformations] = useState(fakeData);
    const navigate = useNavigate();

    const handleClick = (number: string) => {
        navigate(`/operations/${number}`)
      };

    return (
        <React.Fragment>
            <Header />
            <Title><b>Mes comptes</b></Title>
            <Wrapper>
                {cardInformations.map(cardInformation => (
                    <Card
                        key={cardInformation.id}
                        title={cardInformation.nameAccount}
                        numberAccount={cardInformation.numberAccount}
                        onClick={() => handleClick(cardInformation.numberAccount)}
                        accountBalance={cardInformation.balanceAccount}
                    />
                ))}
            </Wrapper>
        </React.Fragment>    
    )
}

export default Homepage;