import Style from './css/carrosel.module.css'
import Violao from '../assets/images/guitarrinha.jpg'

function Carrosel() {
    return(
        <section className={Style.bluesection}>
                   <div className={Style.whiteblock}>
                
                <div className={Style.guitar}>
                    <img src={Violao} alt=""></img>
                </div>

                <h2>VIOLÃO YAMAHA C70 II CLÁSSICO
                NYLON ACÚSTICO NATURAL
                BRILHANTE</h2>

                <p>R$989,50</p>

            </div>

            <div className={Style.whiteblock}>

                <div className={Style.guitar}>
                    <img src={Violao} alt=""></img>
                </div>
                
                <h2>VIOLÃO YAMAHA C70 II CLÁSSICO
                NYLON ACÚSTICO NATURAL
                BRILHANTE</h2>

                <p>R$989,50</p>

            </div>

            <div className={Style.whiteblock}>

                <div className={Style.guitar}>
                    <img src={Violao} alt=""></img>
                </div>

                <h2>VIOLÃO YAMAHA C70 II CLÁSSICO
                NYLON ACÚSTICO NATURAL
                BRILHANTE</h2>

                <p>R$989,50</p>

            </div>

            <div className={Style.whiteblock}>

                <div className={Style.guitar}>
                    <img src={Violao} alt=""></img>
                </div>

                <h2>VIOLÃO YAMAHA C70 II CLÁSSICO
                NYLON ACÚSTICO NATURAL
                BRILHANTE</h2>

                <p>R$989,50</p>

            </div>
        </section>
    )
}

export default Carrosel