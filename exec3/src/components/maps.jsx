import Style from './css/maps.module.css'

function Maps() {
    return(
         <div className={Style.orangesection}>
            <div className={Style.mapblock}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.2082552682255!2d-46.69796507531051!3d-23.5250109788248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1787930743156!5m2!1spt-BR!2sbr"
                className={Style.map}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin">

                </iframe>
            </div>
            <div className={Style.orangeblock}>
                <h4>Nossa Loja - Instrumentos Musicais</h4>
                <p>Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda
                ecker, em uma construção do século XIX, numa área de 500m2, com uma variada gama de instrumentos, em um ambiente agradavel para toda a família!</p>
            </div>

        </div>
    )
}

export default Maps