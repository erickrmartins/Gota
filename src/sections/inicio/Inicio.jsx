import styles from './Inicio.module.css'

function Inicio({ inicio, link }) {
    return (
        <section id='inicio' className={styles.inicio}>
            <div className={styles.esquerda}>
                <h1>{inicio.titulo}</h1>
                <h2>{inicio.subtitulo}</h2>
                <div className={styles.botoes}>
                    <a href='#cardapio' className={styles.cardapio}>Ver Cardápio</a>
                    <a href={link} target='_blank' rel='noopener noreferrer' className={styles.pedir}>PEDIR AGORA</a>
                </div>
            </div>
            <div className={styles.direita}>
                <img src={`${import.meta.env.BASE_URL}inicio.jpg`} alt={inicio.titulo} />
            </div>
        </section>
    )
}

export default Inicio;