import Style from './css/contato.module.css'
import Insta from '../assets/images/insta.png'
import Face from '../assets/images/face.png'
import Whats from '../assets/images/whats.png'


function Contato() {
    return(
        <section className={Style.contato}>
            <div className={Style.formulario}>
                <form action="">
                    <label for="nome">Entre com o seu Nome:</label>
                    <input type="text" placeholder="Digite seu nome aqui:"></input>
                

                    <label for="nome">Entre com o seu Email:</label>
                    <input type="text" placeholder="Digite seu email aqui:"></input>
            

                    <input className={Style.pedido} type="text" placeholder="Faça seu pedido por aqui:"></input>

                    <button type="submit">Enviar</button>
                </form>
                
            </div>
            <div className={Style.redes}>
                <h5>Acesse também nossas redes sociais:</h5>
                <div className={Style.container}>
                    <img src={Whats} alt=""></img>
                    <img src={Insta} alt=""></img>
                    <img src={Face} alt=""></img>
                </div>
            </div>
        </section>
    )
}

export default Contato