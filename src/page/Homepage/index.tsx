import 'bulma/css/bulma.min.css';
import React from "react";
import Header from '../../components/Header';
import styled from 'styled-components';
import Card from '../../components/Card';

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

const handleClick = () => {
    console.log('Card clicked');
  };

const Homepage = () => {
    return (
        <React.Fragment>
            <Header />
            <Title><b>Mes comptes</b></Title>
            <Wrapper>
                <Card
                title="Compte Bancaire"
                numberAccount="N° 123456789"
                onClick={handleClick}
                accountBalance={50000}
                />
            </Wrapper>
        </React.Fragment>    
    )
}

export default Homepage;