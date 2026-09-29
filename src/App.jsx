import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Inicio from "./sections/inicio/Inicio.jsx";
import Cardapio from "./sections/cardapio/Cardapio.jsx";
import SobreNos from "./sections/sobre-nos/SobreNos.jsx";
import Contatos from "./sections/contatos/Contatos.jsx";
import './App.css';
import {data} from "./data/data.js"

function App() {
    return (
        <div className="mainContainer">
            <Header link={data.empresa.link}/>
            <Inicio link={data.empresa.link} inicio={data.inicio}/>
            <Cardapio link={data.empresa.link} cardapio={data.cardapio}/>
            <SobreNos sobre={data.sobre} />
            <Contatos contatos={data.contatos}/>
            <Footer redes={data.contatos.secoes[2]} empresa={data.empresa}/>
        </div>
    )
}

export default App;