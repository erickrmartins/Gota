# Food Store

Landing page responsiva para lojas de comida e pequenos negócios locais, feita em React. Página única com quatro seções: apresentação, cardápio, história da marca e contatos.

O conteúdo (textos, produtos, links, horários) fica centralizado em um único arquivo, `src/data/data.js`. Os componentes só recebem esses dados por props.

## Tecnologias

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/) (build e servidor de desenvolvimento)
- CSS Modules (um arquivo de estilo por componente)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) (lint)
- Fontes do Google Fonts: **Cookie** (títulos) e **Montserrat** (texto)
- GitHub Actions para deploy no GitHub Pages

## Seções da página

| Seção | Âncora | Descrição |
| --- | --- | --- |
| Início | `#inicio` | Título, texto de apresentação, botões de cardápio e pedido, e imagem principal |
| Cardápio | `#cardapio` | Grade de produtos com foto, nome, descrição, preço opcional e botão de pedido |
| Sobre Nós | `#sobre-nos` | História da marca com foto |
| Contatos | `#contatos` | Delivery, localização, redes sociais e horário de funcionamento |

O `Header` tem menu de navegação por âncoras, botão **Pedir** e vira um menu hambúrguer em telas pequenas. O `Footer` exibe os ícones das redes sociais, o nome e o CNPJ da empresa e o crédito do desenvolvedor.

## Estrutura do projeto

```
food-store/
├── .github/workflows/
│   └── deploy.yml           # Deploy automático no GitHub Pages
├── public/                  # Arquivos estáticos (imagens, ícones)
│   ├── cardapio/            # Fotos dos produtos (1.jpg, 2.jpg, ...)
│   ├── icones/
│   │   ├── 1/               # Ícones da seção de contatos com id 1 (1.png, 2.png, ...)
│   │   ├── 2/               # Ícones da seção de contatos com id 2
│   │   ├── 3/               # Ícones da seção de contatos com id 3
│   │   └── redes/           # Ícones das redes sociais exibidos no rodapé
│   ├── sobre/               # Fotos da seção Sobre Nós (1.jpg, ...)
│   ├── inicio.jpg           # Imagem principal
│   ├── logo.png             # Logo (também usado como favicon)
│   ├── menu.svg             # Ícone do menu mobile
│   └── pedir.png            # Ícone do botão Pedir
├── src/
│   ├── components/
│   │   ├── header/          # Cabeçalho e menu (desktop e mobile)
│   │   ├── footer/          # Rodapé
│   │   └── item-cardapio/   # Card de produto do cardápio
│   ├── sections/
│   │   ├── inicio/
│   │   ├── cardapio/
│   │   ├── sobre-nos/
│   │   └── contatos/
│   ├── data/
│   │   └── data.js          # Todo o conteúdo do site
│   ├── App.jsx              # Monta a página e distribui os dados
│   ├── App.css              # Estilos globais e variáveis de tema
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) instalado (o workflow de deploy usa a versão 20).

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Gerar a versão de produção (pasta dist/)
npm run build

# Visualizar a versão de produção localmente
npm run preview

# Verificar o código com o linter
npm run lint
```

## Como editar o conteúdo

Todo o conteúdo está em `src/data/data.js`, dividido em blocos:

| Bloco | O que controla |
| --- | --- |
| `empresa` | `nome` e `cnpj` (exibidos no rodapé) e `link`, o link de pedido principal |
| `inicio` | `titulo` e `subtitulo` da seção Início (o título também é o texto alternativo da imagem) |
| `cardapio` | `titulo`, `subtitulo` e a lista `itens` |
| `sobre` | `titulo`, `subtitulo` e a lista `secoes` |
| `contatos` | `titulo`, `subtitulo`, `horarios` e a lista `secoes` |

O `empresa.link` é usado em três lugares: no botão **Pedir** do cabeçalho, no botão **PEDIR AGORA** da seção Início e em todos os cards do cardápio (o card inteiro é um link).

### Produtos do cardápio

```js
{
    "id": 3,
    "nome": "Nutella",
    "descricao": "Massa de baunilha com gota de chocolate e recheio de nutella.",
    "preco": "14,00"   // opcional
}
```

| Campo | Obrigatório | Descrição |
| --- | --- | --- |
| `id` | Sim | Identificador único. Também define a foto: `public/cardapio/<id>.jpg` |
| `nome` | Sim | Nome do produto (também usado como texto alternativo da imagem) |
| `descricao` | Sim | Descrição do produto |
| `preco` | Não | Se omitido, o preço não aparece na página |

### Sobre Nós

Cada item de `sobre.secoes` tem `id`, `titulo` e `descricao`. A foto é `public/sobre/<id>.jpg`.

### Contatos

- **`horarios`**: lista de `{ id, dia, hora }`, exibida no bloco Funcionamento.
- **`secoes`**: cada seção tem `id`, `titulo` e uma lista `dados` com `{ id, label, link }`.
- O ícone de cada item é `public/icones/<id da seção>/<id do item>.png`. Ao adicionar um item, adicione também o ícone com os mesmos ids.
- **Atenção:** o rodapé usa a terceira seção de `contatos.secoes` (`secoes[2]`) como lista de redes sociais, com os ícones em `public/icones/redes/<id do item>.png`. Mantenha as redes sociais nessa posição.

### Imagens

Substitua os arquivos em `public/` mantendo os mesmos nomes. As imagens são referenciadas por caminho absoluto (`/logo.png`, `/cardapio/1.jpg` etc.).

### O que ainda não vem do `data.js`

Estes itens estão escritos direto nos componentes ou no `index.html`:

- Rótulos do menu (Início, Cardápio, Sobre Nós, Contatos) e do botão **Pedir**
- Botões **Ver Cardápio**, **PEDIR AGORA** e **Peça já**
- Títulos "Funcionamento" e "Todos os direitos reservados" e o crédito "Desenvolvido por" no rodapé
- Texto alternativo do logo e do menu
- `<title>`, favicon e fontes, em `index.html`

## Tema e design

As cores e sombras são variáveis CSS definidas em `:root`, no arquivo `src/App.css`:

| Variável | Uso |
| --- | --- |
| `--color-main-bg` | Fundo da página |
| `--color-card-bg` | Fundo de cards e seções |
| `--color-card-border` | Borda de cards |
| `--color-card-text-main` | Cor de destaque (títulos, links em hover) |
| `--color-card-text-sec` | Cor do texto comum |
| `--shadow-card` | Sombra dos cards |
| `--color-button-bg` / `--color-button-text` | Botões |

Para mudar a identidade visual, altere esses valores e troque as fontes no `index.html`.

## Responsividade

O layout se adapta em telas de até `768px`: as colunas são empilhadas, os tamanhos de fonte diminuem e o menu vira um botão hambúrguer.

## Deploy

O projeto gera arquivos estáticos na pasta `dist/` com `npm run build`, então pode ser publicado em qualquer hospedagem estática, como GitHub Pages, Cloudflare Pages ou Netlify.

Para o GitHub Pages já existe o workflow `.github/workflows/deploy.yml`: a cada push na branch `main` (ou manualmente, por *Run workflow*), ele instala as dependências, gera o build e publica a pasta `dist/`. É preciso ativar o GitHub Pages no repositório em **Settings > Pages**, com a fonte **GitHub Actions**.

Se o site for publicado em um subcaminho (por exemplo `usuario.github.io/nome-do-repo`), é preciso definir `base` no `vite.config.js` e ajustar os caminhos das imagens usados no código (`/logo.png`, `/cardapio/...`, `/icones/...`). Em domínio próprio ou na raiz do domínio, nada disso é necessário.
