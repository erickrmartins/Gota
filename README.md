Gota Cookies

Landing page da Gota, confeitaria artesanal de cookies recheados em Juiz de Fora, MG. O site apresenta a marca, mostra o cardápio e reúne todos os canais de pedido e contato em uma única página.

Site online: erickrmartins.github.io/Gota

Seções
Seção	Âncora	Conteúdo
Início	#inicio	Apresentação da marca e botões para ver o cardápio e pedir
Cardápio	#cardapio	Cookies com foto, descrição e preço. Cada card leva ao link de pedido
Sobre Nós	#sobre-nos	História e modo de preparo da marca
Contatos	#contatos	Delivery, localização, redes sociais e horário de funcionamento
Tecnologias
React 19 e Vite 8
CSS Modules
Oxlint
Fontes do Google Fonts: Cookie (títulos) e Montserrat (texto)
GitHub Actions e GitHub Pages para o deploy
Estrutura do projeto
Gota/
├── .github/workflows/
│   └── deploy.yml           # Deploy automático no GitHub Pages
├── public/
│   ├── cardapio/            # Fotos dos cookies (1.jpg ... 6.jpg)
│   ├── icones/              # Ícones da seção de contatos (pastas 1, 2 e 3)
│   │   └── redes/           # Ícones das redes sociais do rodapé
│   ├── sobre/               # Foto da seção Sobre Nós
│   ├── inicio.jpg           # Imagem principal
│   ├── logo.png             # Logo e favicon
│   ├── menu.svg             # Ícone do menu mobile
│   └── pedir.png            # Ícone do botão Pedir
├── src/
│   ├── components/          # Header, Footer e ItemCardapio
│   ├── sections/            # Início, Cardápio, Sobre Nós e Contatos
│   ├── data/data.js         # Todo o conteúdo do site
│   ├── App.jsx
│   ├── App.css              # Variáveis de tema e estilos globais
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
Como rodar

Pré-requisito: Node.js instalado (o deploy usa a versão 20).

bash
# Instalar as dependências (necessário após clonar)
npm install

# Servidor de desenvolvimento
npm run dev

# Gerar a versão de produção (pasta dist/)
npm run build

# Testar a versão de produção localmente
npm run preview

# Verificar o código com o linter
npm run lint
Como atualizar o conteúdo

Tudo o que aparece no site vem de src/data/data.js. Para uma atualização de rotina:

O que mudar	Onde
Preço, nome ou descrição de um cookie	cardapio.itens
Novo sabor	Adicionar um item em cardapio.itens com um novo id e a foto public/cardapio/<id>.jpg
Horário de funcionamento	contatos.horarios
Link de pedido	empresa.link (usado no cabeçalho, no início e nos cards) e o item "Peça aqui" em contatos.secoes
Endereço, iFood, WhatsApp e redes sociais	contatos.secoes
Textos de apresentação e história	inicio e sobre

Observações:

O preco de cada item é opcional. Se for removido, o valor não aparece no site.
A foto de cada item vem do id: public/cardapio/<id>.jpg. O mesmo vale para public/sobre/<id>.jpg e para os ícones em public/icones/<seção>/<item>.png.
O rodapé usa a terceira seção de contatos.secoes (secoes[2]) como lista de redes sociais, com os ícones em public/icones/redes/<item>.png. Mantenha as redes sociais nessa posição.
Para trocar uma imagem, substitua o arquivo em public/ mantendo o mesmo nome.

Depois de editar, faça o commit e o push na main. O site é atualizado sozinho em cerca de um a dois minutos.

Tema

As cores e sombras são variáveis CSS no :root do arquivo src/App.css (--color-main-bg, --color-card-bg, --color-card-text-main, entre outras). Os títulos usam a fonte Cookie e o restante do texto usa a Montserrat, ambas carregadas no index.html.

Deploy

O site é publicado no GitHub Pages pelo workflow .github/workflows/deploy.yml. A cada push na branch main (ou manualmente, em Actions > Run workflow), ele instala as dependências, gera o build e publica a pasta dist/. O andamento aparece na aba Actions do repositório.

Como o site fica no subcaminho /Gota/, o vite.config.js define base: '/Gota/', e as imagens usadas nos componentes devem ser referenciadas a partir de import.meta.env.BASE_URL. Se o repositório for renomeado ou o site passar para um domínio próprio, esse valor precisa ser ajustado.

Configuração necessária no GitHub: em Settings > Pages, a fonte (Source) deve estar em GitHub Actions.

Content
landing-page-food-store.zip

ZIP

landing-page-food-store_1.zip

ZIP

export const data = { "empresa": { "nome": "Gota", "cnpj": "67.277.752/0001-75", "link": "https://whatsmenu.com.br/gotacookies" }, "inicio": { "titulo": "Amor na Primeira Mordida", "subtitulo": "Cookies artesanais recheados, assados diariam

PASTED
