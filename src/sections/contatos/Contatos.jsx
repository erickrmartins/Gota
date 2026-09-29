import styles from './Contatos.module.css'

function Contatos({ contatos }) {
    return (
        <section id='contatos' className={styles.contatos}>
            <div className={styles.top}>
                <h1>{contatos.titulo}</h1>
                <h2>{contatos.subtitulo}</h2>
            </div>
            <div className={styles.bot}>
                {contatos.secoes.map((secao) =>
                    <div className={styles.secao} key={secao.id}>
                        <label>{secao.titulo}</label>
                        <div className={styles.itens}>
                            {secao.dados.map((dado) =>
                                <a key={dado.id} href={dado.link} target='_blank' rel='noopener noreferrer' className={styles.item}>
                                    <img src={`${import.meta.env.BASE_URL}icones/${secao.id}/${dado.id}.png`} alt={dado.label} />
                                    {dado.label}</a>
                            )}
                        </div>
                    </div>
                )}
                <div className={styles.funcionamento}>
                    <label>Funcionamento</label>
                    <div className={styles.itens}>
                        {contatos.horarios.map((horario) =>
                            <div className={styles.item} key={horario.id}>
                                <div>
                                    <p>{horario.dia}</p>
                                </div>
                                <div>
                                    <p>{horario.hora}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contatos;