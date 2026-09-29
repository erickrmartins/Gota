import styles from './Cardapio.module.css';
import ItemCardapio from '../../components/item-cardapio/ItemCardapio';

function Cardapio({ cardapio, link }) {
    return (
        <section id='cardapio' className={styles.cardapio}>
            <div className={styles.titulo}>
                <h1>{cardapio.titulo}</h1>
                <h2>{cardapio.subtitulo}</h2>
            </div>
            <div className={styles.itens}>
                {cardapio.itens.map((item) =>
                    <ItemCardapio
                        key={item.id}
                        id={item.id}
                        titulo= {item.nome}
                        descricao= {item.descricao}
                        preco={item.preco}
                        link={link}
                    />
                )}
            </div>
        </section>
    )
}

export default Cardapio;