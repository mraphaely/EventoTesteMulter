import { Caixa, Caixinha1, Caixinha2, H1, P, Btn, Btn2, LabelsInputs, Label, Input } from "../Styles/Cadastro.js";
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirma_senha, setConfirmaSenha] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('senha', senha);
        formData.append('confirma_senha', confirma_senha);

        try {
            const response = await axios.post('http://localhost:3333/usuarios/cadastrar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage('Usuário cadastrado com sucesso!');
            setEmail('');  
            setSenha('');  
            setConfirmaSenha('');  
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error.response || error);
            setMessage('Erro ao cadastrar usuário');
        }
    };

    return (
        <Caixa>
            <Caixinha1>
                <H1>Bem vindo(a) de volta!</H1>
                <P>Faça login na plataforma para poder criar ou se increver em eventos incríveis.</P>
                <Btn to='/PagLogin'>ENTRAR</Btn>
            </Caixinha1>

            <Caixinha2 className="caixa">
                <H1>Faça Cadastro no codemarket</H1>
                <LabelsInputs onSubmit={handleSubmit}>
                    <Label htmlFor='email' controlId="email">Email:</Label>
                    <Input
                        type='text'
                        id='email'
                        name='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Label htmlFor='senha' controlId="senha">Senha:</Label>
                    <Input
                        type='password'
                        id='senha'
                        name='Senha'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <Label htmlFor='confirma_senha' controlId="confirma_senha">Repetir senha:</Label>
                    <Input
                        type='password'
                        id='confirma_senha'
                        name='ConfirmaSenha'
                        value={confirma_senha}
                        onChange={(e) => setConfirmaSenha(e.target.value)}
                    />
                    <Btn2 variant="primary" type="submit">CADASTRAR</Btn2>
                </LabelsInputs>
            </Caixinha2>
            {message && <p>{message}</p>}
        </Caixa>
    );
}

export default Register;
