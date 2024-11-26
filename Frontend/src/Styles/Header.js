import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.img`
width:130px !important;
margin-left: 90px !important;
`
export const Caixa =  styled.div`
display: flex;
background-color:#000;
left: 0;
right: 0;
justify-content: space-between;
align-items:center
`


export const Btns = styled.span`
display: flex;
cursor: pointer;
padding-right: 120px !important;
`
export const LinkStyled = styled(Link)`
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    padding: 0px 25px !important;
    color: #fff;
    &:hover{
        color: #AD6CFF;
    }
`