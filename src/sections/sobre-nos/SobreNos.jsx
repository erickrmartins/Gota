import styles from './SobreNos.module.css'

function SobreNos({ sobre }) {
    return (
        <section id='sobre-nos' className={styles.sobreNos}>
            <div className={styles.top}>
                <h1>{sobre.titulo}</h1>
                <h2>{sobre.subtitulo}</h2>
            </div>
            <div className={styles.bot}>
                {sobre.secoes.map((secao) =>
                    <div key={secao.id} className={styles.secao}>
                        <div className={styles.esquerda}>
                            <img src={`${import.meta.env.BASE_URL}sobre/${secao.id}.jpg`} alt={secao.titulo} />
                        </div>
                        <div className={styles.direita}>
                            <h1>{secao.titulo}</h1>
                            <h2>{secao.descricao}</h2>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default SobreNos;