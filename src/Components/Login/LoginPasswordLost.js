import React from 'react';
import { PASSWORD_LOST } from '../../api';
import UseFetch from '../../Hooks/UseFetch';
import UseForm from '../../Hooks/UseForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswordLost = () => {
    const login = UseForm();
    const {data,loading,error,request} = UseFetch();

    async function handleSubmit(event){
       event.preventDefault();
       if(login.validate()){
         const {url,options} = PASSWORD_LOST({login: login.value,url:'http:localhost:3000/login/perdeu'});
         const {json} = await request(url,options)  
       }
    }

    return (
        <section>
         <h1 className="title">Perdeu a senha?</h1>
         <Head title="Perdeu a senha?"/>
         {data ? <p style={{color:"#4c1"}}>{data}</p>: <form onSubmit={handleSubmit}>
            <Input label="Email / Usuário" type="text" name="login" {...login}/>
            {loading ? <Button disabled>Enviando...</Button>:<Button>Enviar Email</Button>} 
         </form>}
         <Error error={error}/>
        </section>
    )
}

export default LoginPasswordLost
