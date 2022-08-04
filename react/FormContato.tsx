import React, {useState} from 'react';
import styles from './styles.css';


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
    <div className={styles.containerForm}>
      <form className={styles.formContainer} onSubmit={HandleForm}>
        <br />
        <input className={styles.inputForm} type="text" value={nome} placeholder="Nome" onChange={({target}) => {
          setNome(target.value)
        }}/>
        <br />
        <input className={styles.inputForm} type="email" value={email} placeholder="Email" onChange={({target}) => {
          setEmail(target.value) 
        }}/>
        <br />
        <textarea className={styles.textAreaForm} value={textarea} placeholder="Mensagem" onChange={({target}) => {
          setTextarea(target.value)
        }}/>
        <br />
        <button className={styles.buttonForm} type="submit">Enviar</button>
      </form>
    </div> 
  )
  
}

export default FormContato;