import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

const Lista = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await axios.get("http://localhost:3333/eventos/listar");
        setEventos(response.data);
      } catch (error) {
        console.error("Erro ao listar eventos:", error);
      }
    };

    fetchEventos();
  }, []);

  // Só exibe o console se houver dados em eventos
  if (eventos.length > 0) {
    console.log(eventos[0].imagem);
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3333/api/eventos/${id}`);
      setEventos(eventos.filter((evento) => evento.id !== id));
    } catch (error) {
      console.error("Erro ao excluir evento:", error);
    }
  };

  return (
    <Table striped bordered hover>
      <tbody>
        {eventos.length > 0 ? (
          eventos.map((evento) => (
            <div  key={evento.id}  className="d-flex justify-content-around">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={`http://localhost:3333/uploads/${evento.image}`} />
                <Card.Body>
                  <Card.Title>{evento.titulo}</Card.Title>
                  <Card.Text>
                  {evento.local}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>
            </div>

            // <tr key={evento.id}>
            //   <td>{evento.nome}</td>
            //   <td>{evento.descricao}</td>
            //   <td>{evento.status}</td>
            //   <td>
            //     {evento.imagem ? (
            //       <img
            //         src={`http://localhost:3333/uploads/${evento.imagem}`}
            //         alt={evento.nome}
            //         style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            //       />
            //     ) : (
            //       <span>Imagem não disponível</span>
            //     )}
            //   </td>
            //   <td>
            //     <button onClick={() => handleDelete(evento.id)}>Excluir</button>
            //   </td>
            // </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">Nenhum evento disponível</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default Lista;
