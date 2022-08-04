import React, {useState} from 'react';
import {ContainerForm, FormContainer, InputForm, TextAreaForm, ButtonForm} from './FormContatoCss';
//import "./FormContato.css";

// import { Container } from './styles';

const FormContato: React.FC = () => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [textarea, setTextarea] = useState("")


  function HandleForm(event:React.FormEvent){
    event.preventDefault()
    console.log(nome, email, textarea)
  }

  return (
    <ContainerForm>
      <FormContainer onSubmit={HandleForm}>
        <br />
        <InputForm type="text" value={nome} placeholder="Nome" onChange={({target}) => {
          setNome(target.value)
        }}/>
        <br />
        <InputForm type="email" value={email} placeholder="Email" onChange={({target}) => {
          setEmail(target.value) 
        }}/>
        <br />
        <TextAreaForm value={textarea} placeholder="Mensagem" onChange={({target}) => {
          setTextarea(target.value)
        }}/>
        <br />
        <ButtonForm type="submit">Enviar</ButtonForm>
      </FormContainer>
    </ContainerForm> 
  )
  
}

export default FormContato;