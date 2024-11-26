import styled from "styled-components";
import { Link } from "react-router-dom";

export const CaixaLogin = styled.div`
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
  border-radius: 10px 0px 0px 10px;
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
`;

export const Btn = styled(Link)`
  align-items: center;
  text-decoration: none;
  display: flex;
  width: 200px;
  justify-content: center;
  font-size: 18px;
  padding: 6px !important;
  background-color: rgba(255, 255, 255, 0.29);
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  &:hover {
    background-color: #ad6cff;
    color: #fff;
  }
`;

export const Btn2 = styled(Link)`
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
  width: 350px;
  height: 34px;
  border-radius: 0px 10px 10px 10px;
  margin-bottom: 35px !important;
`;

export const H1 = styled.h1`
  color: #fff;
  margin-bottom: 40px !important;
  font-size: 24px;
`;

export const P = styled.p`
  color: #fff;
  width: 250px;
  margin-bottom: 40px !important;
  font-size: 20px;
`;
