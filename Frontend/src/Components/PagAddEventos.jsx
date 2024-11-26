import React from "react";
import { Form } from "react-bootstrap";
import {
  H1,
  Caixa1,
  Caixa,
  Label,
  Div,
  Linha1,
  Linha2,
  Linha3,
  Btn,
} from "../Styles/PagAddEventos"; 
import "../Styles/PagAddEventos.css";
import axios from "axios";

const PagAddEventos = () => {
  const [titulo, setTitulo] = React.useState("");
  const [local, setLocal] = React.useState("");
  const [imagem, setImagem] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [data, setData] = React.useState("");
  const [categoria, setCategoria] = React.useState("");
  const [palestrante, setPalestrante] = React.useState("");
  const [vagas, setVagas] = React.useState("");
  const [ingresso, setIngresso] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const handleFileChange = (event) => {
    // setImagem(event.target.files[0].name);
    setImagem(event.target.files[0]);
  };

  const HandlePost = async (event) => {
    event.preventDefault();
    setLoading("Carregando...");

    try {
      await axios.post("http://localhost:3333/eventos/criar", {
        titulo,
        local,
        imagem,
        cidade,
        data,
        categoria,
        palestrante,
        vagas,
        ingresso,
        descricao,
      });
      setMessage("Evento criado com sucesso!");
      setLoading("");
    } catch (error) {
      console.log(error);
      setMessage("Não foi possível salvar seu evento!");
    }
  };

  return (
    <Caixa1>
      <Caixa className="caixa">
        <H1>Área de Cadastro de Eventos </H1>

        <Form onSubmit={HandlePost}>
          <Div>
            <Linha1>
              <Form.Group className="mb-3" controlId="titulo">
                <Label>Título:</Label>
                <Form.Control
                  type="text"
                  className="input"
                  placeholder="Digite o título do seu evento"
                  value={titulo}
                  onChange={(event) => setTitulo(event.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="local">
                <Label>Local:</Label>
                <Form.Control
                  type="text"
                  className="input"
                  placeholder="Digite o local do evento"
                  value={local}
                  onChange={(event) => setLocal(event.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="imagem">
                <Label>Imagem:</Label>
                <Form.Control
                  type="file"
                  className="input"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="cidade">
                <Label>Cidade:</Label>
                <Form.Control
                  type="text"
                  className="input"
                  placeholder="Digite a cidade do seu evento"
                  value={cidade}
                  onChange={(event) => setCidade(event.target.value)}
                  required
                />
              </Form.Group>
            </Linha1>
            <Linha2>
              <Form.Group className="mb-3" controlId="data">
                <Label>Data:</Label>
                <Form.Control
                  type="date"
                  className="input"
                  value={data}
                  onChange={(event) => setData(event.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="categoria">
                <Label>Categoria:</Label>
                <Form.Control
                  type="text"
                  className="input"
                  placeholder="Digite a categoria do seu evento"
                  value={categoria}
                  onChange={(event) => setCategoria(event.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="palestrante">
                <Label>Palestrante:</Label>
                <Form.Control
                  type="text"
                  className="input"
                  placeholder="Digite o palestrante do seu evento"
                  value={palestrante}
                  onChange={(event) => setPalestrante(event.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="vagas">
                <Label>vagas:</Label>
                <Form.Control
                  type="number"
                  className="input"
                  placeholder="Digite a quantidade de vagas do seu evento"
                  value={vagas}
                  onChange={(event) => setVagas(event.target.value)}
                  required
                />
              </Form.Group>
            </Linha2>
          </Div>
          <Linha3>
            <Form.Group className="mb-3" controlId="ingresso">
              <Label>Ingresso:</Label>
              <Form.Control
                type="number"
                className="input3"
                placeholder="Digite a quantidade de ingressos do seu evento"
                value={ingresso}
                onChange={(event) => setIngresso(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Label>Descrição:</Label>
            <Form.Control as="textarea" rows={3} 
            className="input2"
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}/>
            </Form.Group>
          </Linha3>

          <Btn variant="primary" type="submit" className="btn">
            CADASTRAR
          </Btn>
          {message ? <p style={{color: "#ffff", display: "flex", textAlign: "center", fontSize: "20px", marginLeft: "650px"}}>{message}</p> : <p>{loading}</p>}
        </Form>
      </Caixa>
    </Caixa1>
  );
};

export default PagAddEventos;

