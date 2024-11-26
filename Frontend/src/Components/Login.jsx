import { CaixaLogin, Caixinha1, Caixinha2, H1, P, Btn, Btn2, LabelsInputs, Label, Input } from "../Styles/Login.js"



const Login = () => {
    return(
        <CaixaLogin>
            <Caixinha1>
                <H1>Novo(a) por aqui?</H1>
                <P>Crie sua conta para criar ou descobrir eventos incríveis.</P>

                <Btn to={'/register'}>CADASTRO</Btn>
            </Caixinha1>

            <Caixinha2 className="caixa">
                <H1>Faça login no codemarket</H1>
                <LabelsInputs>
                    <Label >Email:</Label>
                    <Input type='text' id='email' name='Email'/>

                    <Label for='senha'>Senha:</Label>
                    <Input type='text' id='senha' name='Senha'/>
                </LabelsInputs>

                <Btn2>ENTRAR</Btn2>
            </Caixinha2>
        </CaixaLogin>

    )
}
export default Login