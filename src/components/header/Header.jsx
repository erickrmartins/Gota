import styles from './Header.module.css'
import { useState } from 'react';

function Header({ link }) {
    const [menu, setMenu] = useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt='logo' />
            </div>
            <button className={styles.mobile}
                onClick={() => setMenu(!menu)}
                aria-label='menu'
            >
                <img src={`${import.meta.env.BASE_URL}menu.svg`} alt='menu' />
            </button>
            <nav className={`${styles.web} ${menu ? styles.on : undefined}`}>
                <ul>
                    <li><a href='#inicio' onClick={() => setMenu(!menu)}>Início</a></li>
                    <li><a href='#cardapio' onClick={() => setMenu(!menu)} >Cardápio</a></li>
                    <li><a href='#sobre-nos' onClick={() => setMenu(!menu)} >Sobre Nós</a></li>
                    <li><a href='#contatos' onClick={() => setMenu(!menu)} >Contatos</a></li>
                </ul >
            </nav >
            <a href={link} className={styles.pedir} target='_blank' rel='noopener noreferrer'>
                <img src={`${import.meta.env.BASE_URL}pedir.png`} alt='Pedir' />
                Pedir</a>

        </header >
    )
}

export default Header;