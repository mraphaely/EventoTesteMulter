import linkedin from "../imgs/Linkedin.png"
import facebook from "../imgs/FaceBook.png"
import instagram from "../imgs/Instagram.png"

import { DivFooter, P2, P1, Caixa1, Caixa2, Caixinha1, Caixinha2, Imgs, Foto} from "../Styles/Footer"

const Footer = () => {
    return(
        <DivFooter>
            <Caixa1>
                <Caixinha1>
                <P2>about us:</P2>
                <P2>our website was created to improve the dissemination of multiple events in a quick and practical way</P2>
                </Caixinha1>
                <Caixinha2>
                    <P1>social media:</P1>
                    <Imgs>
                    <Foto src={linkedin}/>
                    <Foto src={instagram}/>
                    <Foto src={facebook}/>
                    </Imgs>
                </Caixinha2>
            </Caixa1>
            <Caixa2>
                <P2>Privacy Policy</P2>
                <P2>All Rights Reserved &copy 2024</P2>
                <P2>Terms of Use</P2>
            </Caixa2>
            </DivFooter>
    )
}
export default Footer