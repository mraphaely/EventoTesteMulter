import styled from "styled-components";
import { Link } from "react-router-dom";

export const Caixa = styled.div`
  display: flex;
  background-color: #000;
  height: 80vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Caixinha1 = styled.div`
  margin: 30px 0px;
  width: 485.32px;
  border-radius: 10px 0px 0px 10px ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 551.5px;
  background: linear-gradient(0deg, #5A00CB 0%, #2D0065 100%);
`;

export const Caixinha2 = styled.div`
  width: 485.32px;
  margin: 30px 0px;
  height: 551.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-image: url('../imgs/image7.png'); */
  background-size: cover;
  background-position: center;
  border-radius: 0px 10px 10px 0px ;
`;

export const Btn2 = styled.button`
  color: #fff;
  display: flex;
  width: 200px;
  justify-content: center;
  font-size: 18px;
  text-decoration: none;
  background: linear-gradient(0deg, #5A00CB 0%, #2D0065 100%);
  padding: 6px !important;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(0deg, #2D0065 0%, #5A00CB 100%);
    color: #fff;
  }
`;

export const LabelsInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #fff;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 400px;
  height: 200px;
  border-radius: 10px;
  margin-top: 20px !important;
  margin-bottom: 35px !important;
`;

export const H1 = styled.h1`
  color: #fff;
  margin-bottom: 40px !important;
  font-size: 24px;
`;

export const P = styled.p`
  color: #fff;
  text-align: center;
  width: 280px;
  margin-bottom: 40px !important;
  font-size: 20px;
`;
