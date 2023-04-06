import { render, screen } from '@testing-library/react';
import Card from './components/Card';
import TransactionTable from './components/TransactionTable';
import { mockTestData } from './utils/mockTestData';
import '@testing-library/jest-dom';

test('Card should render name account', () => {
  render(
  <Card 
    key={mockTestData.id}
    title={mockTestData.nameAccount}
    numberAccount={mockTestData.numberAccount}
    accountBalance={mockTestData.balanceAccount}
  />);
  const nameAccount = screen.getByText("Foo");
  expect(nameAccount).toBeInTheDocument();
});

test('Card should render number account', () => {
  render(
  <Card 
    key={mockTestData.id}
    title={mockTestData.nameAccount}
    numberAccount={mockTestData.numberAccount}
    accountBalance={mockTestData.balanceAccount}
  />);
  const numberAccount = screen.getByText("2345");
  expect(numberAccount).toBeInTheDocument();
});

test('Table from transfert page should render operations', () => {
  render(
    <TransactionTable transactions={mockTestData.operationAccount}/>
  );
  const firstTransaction = screen.getByText("buy 1");
  expect(firstTransaction).toBeInTheDocument();
})
