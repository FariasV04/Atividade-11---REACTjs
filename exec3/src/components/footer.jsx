import Style from './css/footer.module.css'
import Insta from '../assets/images/insta.png'
import Face from '../assets/images/face.png'
import Whats from '../assets/images/whats.png'

function Footer() {
    return(
        <footer>
            <h6>Nossa Loja - Instrumentos Musicais</h6>
            <p>Rua Tito, 54 - Lapa</p>
            <p>São Paulo - Brasil</p>
            <div id="container">
                    <img src={Whats} alt=""></img>
                    <img src={Insta} alt=""></img>
                    <img src={Face} alt=""></img>
            </div>
        </footer>
    )
}

export default Footer