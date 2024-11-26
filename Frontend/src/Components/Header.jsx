import {Caixa, Btns, LinkStyled, Logo} from '../Styles/Header'
import logo from "../imgs/Logo.png"

const Header = () => {
    return(
        <Caixa>
             <Logo src={logo}/>
            <Btns>
                <LinkStyled to=''>INICIO</LinkStyled>
                <LinkStyled to='login'>LOGIN</LinkStyled>
                <LinkStyled to='register'>REGISTRO</LinkStyled>
                <LinkStyled to='contato'>CONTATO</LinkStyled>
            </Btns>
        </Caixa>
    )
}

export default Header