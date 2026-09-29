import styles from './Footer.module.css'

function Footer({ redes, empresa }) {
    return (
        <footer className={styles.footer}>
            <div className={styles.redes}>
                {redes.dados.map((rede) =>
                    <a href={rede.link} key={rede.id} target='_blank' rel='noopener noreferrer'>
                        <img src={`${import.meta.env.BASE_URL}icones/redes/${rede.id}.png`} alt={rede.label} />
                    </a>
                )}
            </div>
            <h2>{empresa.nome} - Todos os direitos reservados - CNPJ: {empresa.cnpj}</h2>
            <h2>Desenvolvido por <a href='https://github.com/erickrmartins' target='_blank' rel='noopener noreferrer'>erickrmartins</a></h2>
        </footer>
    )
}

export default Footer;