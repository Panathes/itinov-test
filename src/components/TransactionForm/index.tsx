import 'bulma/css/bulma.min.css';
import { useContext } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components'
import CurrentUserAccounts from '../../context';

export interface TransferFormData {
    find: any;
    firstAccount: string;
    secondAccount: string;
    amount: number;
  }
  
  interface TransferProps {
    onSubmit: (data: TransferFormData) => void;
  }

  const Wrapper = styled.div`
    margin-top: 10px;
    border-radius: 5px;
    height: 350px;
    width: 350px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  `

  const FormWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
  `
  
  const Form = styled.form`
    display: flex;
    flex-direction: column;
  `;
  
  const Input = styled.input`
    padding: 0.5rem;
    margin-bottom: 1rem;
  `;
  
  const Button = styled.button`
    margin-top: 10px;
    padding: 0.5rem;
    background-color: lightblue;
    border: none;
    cursor: pointer;
  `;

  const Label = styled.label`
    margin-top: 10px;
    margin-bottom: 10px;
  `


const TransactionForm = ({onSubmit}: TransferProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<TransferFormData>();
    const cardInformations = useContext(CurrentUserAccounts)
    const submitHandler: SubmitHandler<TransferFormData> = data => {
      onSubmit(data);
    };

    return (
      <Wrapper>
        <FormWrapper>
          <Form onSubmit={handleSubmit(submitHandler)}>
            <Label>Depuis quelle compte ?</Label>
            <select {...register("firstAccount")}>
            {cardInformations?.map( account => (
                <option value={account.nameAccount} key={account.id}>
                    {account.nameAccount} / {account.balanceAccount} €
                </option>
            ))}
            </select>
            {errors.firstAccount && <span>Champs requis</span>} 
      
            <Label>Vers quelle compte ?</Label>
            <select {...register("secondAccount")}>
            {cardInformations?.map( account => (
                <option value={account.nameAccount} key={account.id}>
                    {account.nameAccount} / {account.balanceAccount} €
                </option>
            ))}
            </select>
            {errors.secondAccount && <span>Champs requis</span>} 
      
            <Label>Quelle montant ?</Label>
            <Input type="number" {...register('amount', { required: true, min: 0 })} />
            {errors.amount?.type === 'required' && <span>Champs requis</span>}
            {errors.amount?.type === 'min' && <span>The amount must be greater than or equal to 0</span>}
      
            <Button type="submit">Transferer</Button>
          </Form>
        </FormWrapper>
      </Wrapper>
    )
}

export default TransactionForm;