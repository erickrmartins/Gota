import styles from './ItemCardapio.module.css'


function ItemCardapio({ id, titulo, descricao, preco, link }) {
    return (
        <a className={styles.item} href={link} target='_blank' rel='noopener noreferrer'>
            <img src={`${import.meta.env.BASE_URL}cardapio/${id}.jpg`}

                alt={titulo} />
            <div>
                <h1>{titulo}</h1>
                <h2>{descricao}</h2>
                <p className={(preco ? styles.preco : styles.semPreco)}>R$ {preco}</p>
                <button className={styles.pedir}>Peça já</button>
            </div>
        </a>
    )
}

export default ItemCardapio;