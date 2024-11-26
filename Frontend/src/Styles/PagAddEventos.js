
import styled from "styled-components";

export const Caixa1 = styled.div`
  display: flex;
  background-color: #000;
  height: 120vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
background: linear-gradient(0deg, #5A00CB 0%, #2D0065 100%);
padding: 15px !important;
border-radius: 10px 10px 0px 0px;
font-size:25px;
display: flex;
justify-content: center;
align-items: center;
width: 1100px;
color: #fff;
margin-bottom: 10px;
`

export const Caixa = styled.div`
`;

export const Div = styled.div`
  display: flex;
  padding-top: 10px !important ;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Linha1 = styled.div`
background-color: none;
  display: flex;
  flex-direction: column;
`;

export const Linha2 = styled(Linha1)`
   display: flex;
  flex-direction: column;
  padding-left: 100px !important;
`;

export const Linha3 = styled(Linha1)`
display: flex;
justify-content: center;

  flex-direction: column;
  `;

export const Label = styled.label`
  color: #fff;
  font-size: 20px;
`;


export const Btn = styled.button`
  color: #fff;
  margin-top:50px !important ;
  display: flex;
  width:225px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 18px;
  text-decoration: none;
  background: linear-gradient(0deg, #5A00CB 0%, #2D0065 100%);
  margin: 0px !important;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(0deg, #2D0065 0%, #5A00CB 100%);
    color: #fff;
  }
`;
