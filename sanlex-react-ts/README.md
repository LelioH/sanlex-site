# Sanlex — site de moda íntima (React + TypeScript + Vite)

Site de catálogo de lingerie com carrinho, favoritos e finalização de pedido
pelo WhatsApp, escrito em **TypeScript**. **Tudo é configurável em um único
arquivo:** [`src/site.config.ts`](src/site.config.ts).

## Rodar localmente

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior.

```bash
npm install
npm run dev        # abre em http://localhost:5173
```

Outros comandos:

```bash
npm run typecheck  # checa os tipos sem gerar build
npm run build      # checa os tipos e gera a pasta dist/
npm run preview    # serve o build localmente
```

## Onde mexer — `src/site.config.ts`

Esse arquivo concentra **cores, fontes, fotos, textos, produtos e contatos**,
todos tipados. O editor (VS Code) avisa na hora se faltar um campo ou se o
formato estiver errado. Você não precisa abrir nenhum outro arquivo para
personalizar o site.

### 1. Trocar o visual por época (temas)

No objeto `themes` já existem 4 prontos: **Clássico, Natal, Dia das Mães, Verão**.
Para colocar um no ar, mude uma linha:

```ts
activeTheme: "natal",   // "classic" | "natal" | "diaDasMaes" | "verao"
```

Cada tema define os mesmos 14 "slots" de cor (só mudam os valores), as fontes e
o arredondamento das bordas. Para criar um novo, copie um bloco existente.

> Durante a edição há um seletor flutuante no canto inferior esquerdo para testar
> os temas ao vivo. Para escondê-lo no site publicado, defina
> `settings.showThemeSwitcher: false`.

### 2. Colocar fotos

Qualquer item com campo `image` aceita foto. Duas formas:

- **URL externa:** `image: "https://.../foto.jpg"`
- **Arquivo local:** coloque o arquivo em `public/img/` e use `image: "/img/foto.jpg"`

Têm foto: o **hero** (`hero.image`), cada **categoria** (`categories[].image`),
cada **produto** (`products[].image`) e a seção **sobre** (`about.image`).
Se `image` ficar vazio (`""`), aparece um fundo gerado nas cores do tema.

### 3. Editar produtos

Edite a lista `products` (tipo `Product[]`). Cada peça tem `ref`, `name`,
`cats`, `price`, `sizes`, `fabric`, `badge` (selo opcional) e `image`.

### 4. Contatos e finalização

Em `contact`, troque o `whatsapp` pelo número real (`55` + DDD + número,
**somente dígitos**) e os links do Instagram. O botão "Finalizar pedido" monta
a mensagem do pedido no WhatsApp automaticamente.

## Publicar

`npm run build` gera a pasta `dist/` (site estático). Suba em **Vercel,
Netlify, Cloudflare Pages, GitHub Pages** ou qualquer hospedagem. Na
Vercel/Netlify, o comando de build é `npm run build` e a pasta de saída é `dist`.

## Estrutura

```
src/
  site.config.ts        ← edite aqui (cores, fotos, textos, produtos)
  types.ts              ← tipos compartilhados (Theme, Product, etc.)
  styles.css            ← estilos (usam as variáveis do tema)
  App.tsx               ← monta a página e aplica o tema
  vite-env.d.ts
  lib/                  ← tema, formatação, ícones e links
  store/                ← carrinho + favoritos (com persistência local)
  components/           ← Header, Hero, Catalog, Drawer, etc.
public/img/             ← coloque suas fotos aqui
```
