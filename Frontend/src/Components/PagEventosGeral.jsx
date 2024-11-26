import React from "react";
import axios from "axios";
import { Table, Button, Card } from "react-bootstrap";
import {H1, Caixa2, Container, CaixaH1} from '../Styles/PagGetEventos.js'


const PagEventosGeral = () => {
  const [eventos, setEventos] = React.useState([]);

  React.useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await axios.get("http://localhost:3333/eventos/listar");
        if (response.data && Array.isArray(response.data.eventos)) {
          setEventos(response.data.eventos);
        } else {
          setEventos([]);
          console.log(fetchEventos)
          console.log("A resposta da API não contém um array de eventos.");
        }
      } catch (error) {
        console.error("Erro ao listar eventos:", error);
        setEventos([]);
      }
    };

    fetchEventos();
  }, []);

  return (
    <Container className='container'>

          <CaixaH1 className='caixa2'>
            <H1>Eventos em Geral:</H1>
          </CaixaH1>
        <Caixa2>

    <Table striped bordered hover>
      <tbody>
        {eventos.length > 0 ? (
          eventos.map((evento) => (
            <React.Fragment key={evento.id}>
              <div className="d-flex justify-content-around">
              <Card className="important-padding2" style={{ width: '355px', height:'355px', background: 'linear-gradient( #2D0065 50%, #5A00CB)',fontSize:'24px'  }}>
                  <Card.Img variant="top" src={`http://localhost:3333/eventos/${evento.image}`} />
                  <Card.Body>
                    <Card.Title  style={{ color: '#fff', marginLeft: '20px', marginTop: '20px' }}>{evento.titulo}</Card.Title>
                    <Card.Text style={{color:'#fff', width:'344px', marginLeft: '20px', marginTop: '10px', fontSize:'20px' }}>{evento.palestrante}</Card.Text>
                    <Card.Text style={{color:'#fff', width:'344px', marginLeft: '20px', marginTop: '10px', fontSize:'20px' }}>{evento.descricao}</Card.Text>
                    <Button  variant="primary" className="important-padding" style={{border: 'none', color: '#fff', fontSize: '20px', backgroundColor: 'rgba(255, 255, 255, 0.29)' }}>Saiba mais</Button>
                  </Card.Body>
                </Card>


              </div>
            </React.Fragment>
          ))
        ) : (
          <tr>
            <td colSpan="5">Nenhum evento disponível</td>
          </tr>
        )}
      </tbody>
    </Table>
    {/* </Linha> */}
          {/* </Linhas> */}

        </Caixa2>
      </Container>
  );
}

export default PagEventosGeral