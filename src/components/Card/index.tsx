import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import wallet from '../../asset/wallet.png'

interface CardProps {
    title: string;
    numberAccount: string; 
    accountBalance: number;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const CardWrapper = styled.div`
  margin-top: 10px;
  background-color: #fff;
  height: 134px;
  width: 80%;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  }
`;

const Logo = styled.img`
  margin-top: 4px;
  margin-right: 25px;
  height: 20px;
  width: auto;
`

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Amount = styled.p<{ isExpense: boolean }>`
    color: ${props => props.isExpense ? '#ff1b1c' : '#87ff65'}
`;

const Card = ({ title, numberAccount, accountBalance,onClick }: CardProps) => {
  return (
    <CardWrapper onClick={onClick}>
        <Wrapper>
        <TitleWrapper>
            <Logo src={wallet} alt="Logout Logo" />
            <CardTitle><b>{title}</b></CardTitle>
        </TitleWrapper>
        <Amount isExpense={accountBalance < 0}>{accountBalance} €</Amount>
      </Wrapper>
      <CardDescription>{numberAccount}</CardDescription>
    </CardWrapper>
  );
};

export default Card;