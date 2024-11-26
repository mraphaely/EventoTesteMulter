import styled from "styled-components";
import { Link } from "react-router-dom";

export const Caixa = styled.div`   
display: flex;
height: 155vh;
background-color: #000;
margin: 0px !important;
flex-wrap: nowrap;
flex-direction: column;
align-items: center;
`
//CAIXA 1 ============================================

export const Span1 = styled.span`
display: flex;
margin-top:60px ;
justify-content: center;
flex-direction:row;
align-items: center;
`

export const SpanMini1 = styled.span`
width: 500px;
margin: 90px 0px !important;
`

export const Img1 = styled.img`
padding-right: 90px !important;
height: 428px !important;
width: 627px !important;
`

export const H1 = styled.h1`
font-family: Arial, Helvetica, sans-serif;
color: #fff;
margin-bottom:45px !important;
font-size: 32px;
`

export const P = styled.p`
margin-bottom:45px !important;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
color: #fff;
`

export const SpanBtn = styled.span`
display:flex ;
align-items:center;
justify-content:right;
`

export const BntP = styled(Link)`
    height: auto;
    width:auto;
    font-size: 20px;
    background-color:#fff ;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    padding: 15px 25px !important;
    border-top-left-radius:20px ;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    color: #000;
    &: hover { background-color: #AD6CFF; color:#fff}
`


// CAIXA 2 ============================================
export const Span2 = styled.span`
display: flex;
margin-top:60px !important;
flex-direction:row ;
padding:90px !important;
`
export const Caixinha1 = styled.span`    
display: flex;
flex-direction: column;
width: 349.72px;
height: 250px;
background: linear-gradient(0deg, #5A00CB 0%, #2D0065 100%);
border-radius: 10px;
align-items: left;`

export const Caixinha2 = styled.span`
display: flex;
flex-direction:column ;
margin: 0px 80px !important;
width: 349.72px !important;
height: 250px !important;
background: linear-gradient(0deg, #fff 0%, #ACACAC 100%);
border-radius: 10px;

`

export const P2 = styled.span`
color: #fff;
width: 250px !important;
margin-left:30px !important;
font-size: 24px;
`

export const P3 = styled.span`
color: #000;
margin-left:30px !important;
font-size: 24px;
`

export const Img2 = styled.img`
margin-left:30px !important;
margin-top:30px !important;
margin-bottom:30px !important;
width: 50px !important;
`


export const Btn = styled(Link)`
color: #fff;
text-decoration: none;
font-size: 24px;
`

export const Spanmini2 = styled.span`
 display: flex;
 margin-top:30px !important;
 margin-right:25px !important;
justify-content:right;
`
export const Spanmini3 = styled.span`
 display: flex;
 margin-right:25px !important;
justify-content:right;
`

export const Btn2 = styled(Link)`
color: #000;
text-decoration: none;
font-size: 24px;
`

export const SpanBtn2 = styled.span`
`


//CAIXA 3 ============================================
export const Span3 = styled.span`
display: flex;
margin-top:60px !important;
flex-direction:row ;
justify-content:center;
/* margin-left:30px; */
width: 1236px;
height: 245.67px;
background: linear-gradient(150deg, #fff 0%, #ACACAC 100%);
border-radius: 10px;
align-items:center;
`

export const SpanMini4 = styled.span`
`

export const H2 = styled.h1`
font-family: Arial, Helvetica, sans-serif;
color: #000;
margin-bottom:20px !important;
font-size: 32px;
`

export const P4 = styled.p`
font-size: 20px;
width:603px !important;
color: #000;
`

export const Btn4 = styled(Link)`
font-size: 32px;
color: #fff;
display: flex;
align-items: center;
justify-content:center;
background-color: #000;
width: 200px !important;
margin-left: 60px !important;
border-radius: 10px;
height: 63px !important;
text-decoration: none;
&: hover{
        color: #fff;
        background-color:#AD6CFF;
    }
`
