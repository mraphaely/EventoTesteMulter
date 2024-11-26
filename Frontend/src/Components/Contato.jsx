import { Form,  } from "react-bootstrap";
import { Caixa, Caixinha1, Caixinha2, H1, P, Btn2, LabelsInputs, Label, Input } from "../Styles/Contato.js"
import React from "react";
import axios from "axios";
import "../Styles/Cadastra.css"


const Contato = () => {
    const [mensagem, setMensagem] = React.useState("");
    const [message, setMessage] = React.useState(null);
    const [loading, setLoading] = React.useState(null);
  
    const HandlePost = async (event) => {
      event.preventDefault();
      setLoading("Carregando...");
  
      try {
        await axios.post("http://localhost:3333/eventos/contato/enviar", {
          mensagem
        });
        setMessage("Mensagem enviada com sucesso!");
        setLoading("");
      } catch (error) {
        console.log(error);
        setMessage("Não foi possível enviar sua mensagem!");
      }
    };
    
    return(
        <Form onSubmit={HandlePost} >
        <Caixa>
            <Caixinha1>
                <H1>Entre em contato por aqui</H1>
                <P>Envie suas dúvidas ou sugestões, será um prazer lhe responder!</P>
            </Caixinha1>

            <Caixinha2 className="caixa">
                <H1>codemarket</H1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Label>Mensagem:</Label>
            <Form.Control as="textarea" rows={3} 
            className="mensagemCaixa"
            value={mensagem}
            onChange={(event) => setMensagem(event.target.value)}/>
            </Form.Group>
            
                <Btn2 type="submit" >ENVIAR</Btn2>
        {message ? <p style={{color: "#ffff", backgroundColor: "none", display: "flex",  fontSize: "15px", marginTop: "10px"}}>{message}</p> : <p>{loading}</p>}
            </Caixinha2>
        </Caixa>
        </Form>
    )
}
export default Contato;