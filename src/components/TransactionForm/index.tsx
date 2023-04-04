import 'bulma/css/bulma.min.css';
import React,{ useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components'
import { fakeData } from '../../asset/fakeData';

export interface TransferFormData {
    firstAccount: string;
    secondAccount: string;
    amount: number;
  }
  
  interface TransferProps {
    onSubmit: (data: TransferFormData) => void;
  }
  
  const Form = styled.form`
    display: flex;
    flex-direction: column;
  `;
  
  const Input = styled.input`
    padding: 0.5rem;
    margin-bottom: 1rem;
  `;
  
  const Button = styled.button`
    padding: 0.5rem;
    background-color: lightblue;
    border: none;
    cursor: pointer;
  `;


const TransactionForm = ({onSubmit}: TransferProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<TransferFormData>();
    const submitHandler: SubmitHandler<TransferFormData> = data => {
      onSubmit(data);
    };

    return (
        <Form onSubmit={handleSubmit(submitHandler)}>
        <label>Depuis quelle compte ?</label>
        <select {...register("firstAccount")}>
            <option value="0">0 - 1</option>
            <option value="1">1 - 100</option>
        </select>
        {errors.firstAccount && <span>Champs requis</span>} 
  
        <div className='select'>
            <label>Vers quelle compte ?</label>
            <select {...register("secondAccount")}>
                <option value="0">0 - 1</option>
                <option value="1">1 - 100</option>
            </select>
            {errors.secondAccount && <span>Champs requis</span>} 
        </div>
  
        <label>Quelle montant ?</label>
        <Input type="number" {...register('amount', { required: true, min: 0 })} />
        {errors.amount?.type === 'required' && <span>Champs requis</span>}
        {errors.amount?.type === 'min' && <span>The amount must be greater than or equal to 0</span>}
  
        <Button type="submit">Transferer</Button>
      </Form>
    )
}

export default TransactionForm;