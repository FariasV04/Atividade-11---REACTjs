import Style from './css/info.module.css'

function Info(){
    return(
        <section className={Style.redsection}>
            <div className={Style.block1}>
                <h1>Nossa Loja - Instrumentos Musicais</h1>

                <p>Se você é um amante da música, está em busca de um novo
                instrumento musical e não abre mão da qualidade, chegou ao lugar certo! Aqui em nossa loja você encontra os melhores itens, como:teclado, piano (digital e acústico), contrabaixo, bateria, guitarra,
                violão, sopro e muito mais! Nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado! Escolha os seus favoritos e os receba em casa com toda a comodidade que você precisa.
                Confira nossas opções disponiveis e tenha em mãos instrumentos de
                ponta!</p>
            </div>
            <div className={Style.block2}>

            </div>
        </section>
    )
}

export default Info