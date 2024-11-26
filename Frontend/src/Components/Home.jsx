import img1 from '../imgs/home1.png'
import img2 from '../imgs/Caixa1.png'
import img3 from '../imgs/Caixa2.png'
import img4 from '../imgs/Caixa3.png'

import {Caixa,Spanmini2,Spanmini3, Span1, Span2, SpanMini4, H2, P4, Btn4, Span3, Img1, H1, P, P2,P3, BntP,Btn2, SpanMini1, SpanBtn, SpanBtn2, Caixinha1, Caixinha2, Btn, Img2} from '../Styles/Home'



const Home = () => {
    return(
        <Caixa>
            <Span1>
                <Img1 src={img1}/>
                <SpanMini1>
                    <H1>
                    Transforme momentos em memórias inesquecíveis. 
                    Junte-se a nós e viva experiências únicas!
                    </H1>
                    <P>
                    Vamos trabalhar juntos para promover um próximo evento!
                    </P>
                    <SpanBtn>
                    <BntP to={'PagAddEventos'}><strong>ORGANIZAR EVENTO</strong></BntP>

                    </SpanBtn>
                </SpanMini1>
            </Span1>

            <Span2>
                <Caixinha1>
                <Img2 src={img2}/>
                <P2>
                Eventos de empreendedorismo
                </P2>
                <SpanBtn2>
                    <Spanmini3>
                    <Btn to={'PagEventosEmpreendedorismo'}> Learn more</Btn>
                    </Spanmini3>
                </SpanBtn2>
                </Caixinha1>

                <Caixinha2>
                <Img2 src={img3}/>
                <P3>
                Eventos em geral
                </P3>
                <SpanBtn2>
                    <Spanmini2>
                    <Btn2 to={'PagEventosGeral'}> Learn more</Btn2>
                    </Spanmini2>
                </SpanBtn2>
                </Caixinha2>

                <Caixinha1>
                <Img2 src={img4}/>
                <P2>
                Eventos de tecnologia
                </P2>
                <SpanBtn2>
                    <Spanmini2>
                    <Btn to={'PagEventosTec'}> Learn more</Btn>
                    </Spanmini2>
                </SpanBtn2>
                </Caixinha1>
            </Span2>

            <Span3>
                <SpanMini4>
                <H2>Faça login para criar ou participar de eventos magníficos</H2>
                <P4>lorem ipsum amet,  simpli team  printing
theme make types icluding page maker labore active presents</P4>
                </SpanMini4>
                <Btn4>CLICK</Btn4>
            </Span3>

        </Caixa>
    )
}
export default Home