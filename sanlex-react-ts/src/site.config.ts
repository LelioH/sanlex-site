/* ============================================================================
   SANLEX · site.config.ts  —  CENTRO DE CONTROLE DO SITE
   ----------------------------------------------------------------------------
   Edite TUDO por aqui: cores, fontes, fotos, textos, produtos, contatos.
   Você não precisa mexer em mais nenhum outro arquivo para personalizar o site.

   TROCAR A "ROUPAGEM" POR ÉPOCA:
   1. Escolha (ou crie) um tema em `themes` abaixo.
   2. Mude `activeTheme` para o id do tema desejado.
      (Há também um seletor flutuante no canto para testar ao vivo —
       veja `settings.showThemeSwitcher`.)

   FOTOS:
   - Em qualquer item (hero, categoria, produto, sobre) preencha o campo `image`.
   - Use uma URL ("https://...") OU coloque o arquivo em /public/img e
     referencie como "/img/sua-foto.jpg".
   - Se `image` ficar vazio (""), o site mostra um fundo elegante gerado
     automaticamente nas cores do tema.
   ========================================================================== */
import type { Theme, SiteConfig } from "./types";

/* ---------------------------------------------------------------------------
   1) TEMAS — cada tema tem as MESMAS 14 "vagas" de cor; só mudam os valores.
--------------------------------------------------------------------------- */
export const themes: Record<string, Theme> = {
  classic: {
    name: "Clássico Vinho",
    colors: {
      wine: "#43141f", wine2: "#5d1f2d", rose: "#b85c72", roseDeep: "#9d4459",
      blush: "#f3dfdc", nude: "#ead9cf", cream: "#fbf6f2", cream2: "#f6ece6",
      ink: "#2c1118", inkSoft: "#6e4d54", gold: "#a8845b", line: "#e4cfc8",
      white: "#fffdfc", ok: "#3f7a5a"
    },
    fonts: {
      display: { name: "Fraunces", query: "Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400" },
      body: { name: "Manrope", query: "Manrope:wght@400;500;600;700" }
    },
    radius: "14px"
  },

  natal: {
    name: "Natal",
    colors: {
      wine: "#1f3326", wine2: "#2b4733", rose: "#c0392f", roseDeep: "#9c2a22",
      blush: "#f4e3dd", nude: "#e8dcc8", cream: "#faf6ee", cream2: "#f3ecdf",
      ink: "#22241f", inkSoft: "#5d6055", gold: "#b8924a", line: "#ddd2bd",
      white: "#fffdf8", ok: "#2f7a4f"
    },
    fonts: {
      display: { name: "Cormorant Garamond", query: "Cormorant+Garamond:ital,wght@0,500;0,600;1,500" },
      body: { name: "Manrope", query: "Manrope:wght@400;500;600;700" }
    },
    radius: "12px"
  },

  diaDasMaes: {
    name: "Dia das Mães",
    colors: {
      wine: "#5a2545", wine2: "#74305a", rose: "#d77ba0", roseDeep: "#bd5f86",
      blush: "#fbe6ef", nude: "#f3dce4", cream: "#fdf6f9", cream2: "#f8e9f0",
      ink: "#3a1a2e", inkSoft: "#7c5a6c", gold: "#c79a6a", line: "#efd5e1",
      white: "#fffcfe", ok: "#3f7a5a"
    },
    fonts: {
      display: { name: "Fraunces", query: "Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400" },
      body: { name: "Manrope", query: "Manrope:wght@400;500;600;700" }
    },
    radius: "18px"
  },

  verao: {
    name: "Verão",
    colors: {
      wine: "#0f3b46", wine2: "#16515f", rose: "#e8825a", roseDeep: "#d3683e",
      blush: "#fce7d6", nude: "#f3e6cf", cream: "#fbf8f0", cream2: "#f4eede",
      ink: "#14313a", inkSoft: "#5a6e72", gold: "#caa15c", line: "#dfe2cf",
      white: "#fffdf9", ok: "#2f8a6a"
    },
    fonts: {
      display: { name: "Fraunces", query: "Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400" },
      body: { name: "Outfit", query: "Outfit:wght@400;500;600;700" }
    },
    radius: "16px"
  },

  /* Tema oficial da marca — carvão escuro + dourado da logo */
  hwSanlex: {
    name: "H.W. Sanlex",
    colors: {
      wine:     "#1e1c1a",   // carvão escuro (fundo de botões, header, footer)
      wine2:    "#131110",   // carvão mais fundo
      rose:     "#d4a400",   // dourado da marca (destaque principal)
      roseDeep: "#b48c00",   // dourado mais intenso
      blush:    "#faf3e0",   // champanhe claro (gradientes hero, categorias)
      nude:     "#f0e4c0",   // creme dourado
      cream:    "#fdf9ef",   // fundo principal (branco quente)
      cream2:   "#f7f0de",   // fundo secundário
      ink:      "#1a1816",   // texto (quase preto quente)
      inkSoft:  "#5c5040",   // texto suave
      gold:     "#d4a400",   // mesmo que rose — dourado unificado
      line:     "#e4d8a8",   // divisores bege-dourado
      white:    "#fffef5",   // branco quente (cards)
      ok:       "#3f7a5a"    // verde status
    },
    fonts: {
      display: { name: "Fraunces", query: "Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400" },
      body:    { name: "Manrope",  query: "Manrope:wght@400;500;600;700" }
    },
    radius: "14px",
    shadow:   "0 18px 50px -28px rgba(30,28,26,.60)",
    shadowSm: "0 8px 24px -16px rgba(30,28,26,.45)"
  }
};

/* ---------------------------------------------------------------------------
   2) CONFIG GERAL DO SITE
--------------------------------------------------------------------------- */
export const config: SiteConfig = {
  /* -- SEO: título e descrição da aba do navegador / mecanismos de busca -- */
  seo: {
    lang: "pt-BR",
    title: "H.W. Sanlex · Moda Íntima — Confecção de Lingerie",
    description: "H.W. Sanlex Confecções — lingerie feminina com acabamento de atelier. Sutiãs, calcinhas, conjuntos, modeladores e plus size. Atacado e varejo, de Nova Friburgo (RJ)."
  },

  activeTheme: "hwSanlex",  // id de algum tema acima

  settings: {
    currency: "R$",
    freeShippingFrom: 300,
    installments: "3x sem juros",
    storageKey: "sanlex"   // prefixo do localStorage (mude se trocar de marca)
  },

  brand: {
    name: "H.W. Sanlex",
    legalName: "H.W. Sanlex Confecções",   // nome jurídico usado no rodapé
    badge: "Moda Íntima",
    since: "2011",
    logo: "/img/logo.png"   // PNG com fundo transparente — deixe "" para usar texto
  },

  contact: {
    whatsapp: "5522997267309",      // <-- TROQUE: 55 + DDD + número (só dígitos)
    instagramMain: "https://instagram.com/hwsanlex",
    instagramSecondary: "https://instagram.com/sanlexconfeccoes",
    addressLine: "Rua Sanglard, 156 — Conselheiro Paulino",
    city: "Nova Friburgo · RJ",
    hours: "Seg a Sex · 8h–18h",
    cnpj: "14.193.159/0001-84",
    whatsappFloatMessage: "Olá! Vim pelo site e gostaria de informações.",
    whatsappLabel: "WhatsApp da fábrica",
    instagramSecondaryLabel: "Confecções"
  },

  /* -- Menu de navegação (header + menu móvel) -- */
  nav: [
    { href: "#colecao",    label: "Coleção"    },
    { href: "#categorias", label: "Categorias" },
    { href: "#atacado",    label: "Atacado"    },
    { href: "#sobre",      label: "A Sanlex"   },
    { href: "#contato",    label: "Contato"    }
  ],

  announcement: "Atacado & Varejo · Frete grátis acima de R$300 · Direto da fábrica em Nova Friburgo / RJ",

  marquee: [
    "Frete grátis acima de R$300", "Confecção própria", "Do P ao GG", "Atacado & varejo",
    "Envio p/ todo o Brasil", "Pague no Pix ou cartão", "Qualidade de atelier", "Nova Friburgo · RJ"
  ],

  hero: {
    eyebrow: "Confecção própria · desde 2011",
    title: "Lingerie que veste o corpo",
    titleEmphasis: "e a confiança.",
    lede: "Sutiãs, calcinhas, conjuntos, modeladores e plus size com acabamento de atelier — feitos peça por peça em Nova Friburgo, no coração da moda íntima do Brasil.",
    image: "",
    heroImage: "/img/hero/modelo.png",   // PNG com fundo transparente — deixe "" ou remova para usar o card
    ctaPrimary: { label: "Ver a coleção", href: "#colecao" },
    ctaSecondary: { label: "Comprar no atacado", href: "#atacado" },
    stats: [
      { value: "14+", label: "anos de fábrica" },
      { value: "P ao GG", label: "todas as curvas" },
      { value: "RJ", label: "produção nacional" }
    ],
    tagCard: {
      label: "Produtos H.W. Sanlex",
      product: "Nossas cores",
      swatches: ["#8f2f35", "#111f40", "#5b6961", "#000000", "#ffffff"],
      ref: "P ao GG",
      // price: "R$ 64,90"
    }
  },

  /* glyph: "sutia" | "calc" | "set" | "shape" | "sleep" | "plus" */
  categories: [
    { id: "sutia",     name: "Sutiãs",      glyph: "sutia", c1: "#f3dfdc", c2: "#c98ea0", image: "" },
    { id: "calcinha",  name: "Calcinhas",   glyph: "calc",  c1: "#ead9cf", c2: "#b85c72", image: "" },
    { id: "conjunto",  name: "Conjuntos",   glyph: "set",   c1: "#f6ece6", c2: "#9d4459", image: "/img/categorias/conjunto.jpg" },
    // { id: "modelador", name: "Modeladores", glyph: "shape", c1: "#e7c3c6", c2: "#5d1f2d", image: "" },
    { id: "pijama",    name: "Pijamas",     glyph: "sleep", c1: "#f3dfdc", c2: "#a8845b", image: "" }
    // { id: "plus",      name: "Plus Size",   glyph: "plus",  c1: "#ead9cf", c2: "#43141f", image: "" }
  ],

  products: [
    { ref: "0464", name: "Conjunto Luma",  cats: ["conjunto"],  price: 24.90,  sizes: ["P","M","G","GG"],  fabric: "Microfibra · básico do dia",  badge: "",             image: "/img/produtos/ref0464-f.jpg",  imageBack: "/img/produtos/ref0464-c.jpg" },
    { ref: "0465", name: "Conjunto Mily",  cats: ["conjunto"],  price: 22.50,  sizes: ["P","M","G","GG"],  fabric: "Microfibra · básico do dia",  badge: "",             image: "/img/produtos/ref0465-f.jpg",  imageBack: "/img/produtos/ref0465-c.jpg" },
    { ref: "0470", name: "Conjunto Lulu",  cats: ["conjunto"],  price: 29.90,  sizes: ["P","M","G","GG"],  fabric: "Renda · sutiã + calcinha",    badge: "Novo",         image: "/img/produtos/ref0470-f.jpg",  imageBack: "/img/produtos/ref0470-c.jpg" },
    { ref: "0472", name: "Conjunto Mel",   cats: ["conjunto"],  price: 29.90,  sizes: ["P","M","G","GG"],  fabric: "Renda · sutiã + calcinha",    badge: "Mais vendido", image: "/img/produtos/ref0472-f.jpg",  imageBack: "/img/produtos/ref0472-f.jpg" },
    { ref: "0481", name: "Conjunto Layla", cats: ["conjunto"],  price: 22.90,  sizes: ["P","M","G","GG"],  fabric: "Microfibra · básico do dia",  badge: "",             image: "/img/produtos/ref0481-f.jpg",  imageBack: "/img/produtos/ref0481-c.jpg" },
    { ref: "0482", name: "Conjunto Myla",  cats: ["conjunto"],  price: 24.90,  sizes: ["P","M","G","GG"],  fabric: "Microfibra · básico do dia",  badge: "",             image: "/img/produtos/ref0482-f.jpg",  imageBack: "/img/produtos/ref0482-c.jpg" },
    { ref: "0483", name: "Conjunto Lara",  cats: ["conjunto"],  price: 23.90,  sizes: ["P","M","G","GG"],  fabric: "Microfibra · básico do dia",  badge: "",             image: "/img/produtos/ref0483-f.jpg",  imageBack: "/img/produtos/ref0483-c.jpg" },
    { ref: "0484", name: "Conjunto Lily",  cats: ["conjunto"],  price: 22.50,  sizes: ["P","M","G","GG"],  fabric: "Microfibra · básico do dia",  badge: "",             image: "/img/produtos/ref0484-f.jpg",  imageBack: "/img/produtos/ref0484-c.jpg" },
    { ref: "0491", name: "Conjunto Ariel", cats: ["conjunto"],  price: 21.65,  sizes: ["P","M","G","GG"],  fabric: "Microfibra · básico do dia",  badge: "",             image: "/img/produtos/ref0491-f.jpg",  imageBack: "/img/produtos/ref0491-c.jpg" },
    // { ref: "001", name: "Sutiã Bojo Microfibra",          cats: ["sutia"],           price: 49.90,  sizes: ["P","M","G","GG"],  fabric: "Microfibra · bojo fixo",            badge: "Mais vendido", image: "" },
    // { ref: "107", name: "Calcinha Caleçom",               cats: ["calcinha"],        price: 24.90,  sizes: ["P","M","G","GG"],  fabric: "Microfibra · cobertura total",      badge: "", image: "" },
    // { ref: "088", name: "Calcinha Modeladora Alta",       cats: ["calcinha"],        price: 34.90,  sizes: ["P","M","G","GG"],  fabric: "Cintura alta · compressão suave",   badge: "", image: "" },
    // { ref: "199", name: "Conjunto Noiva Branco",          cats: ["conjunto"],        price: 119.90, sizes: ["P","M","G"],       fabric: "Renda francesa · detalhe pérola",   badge: "", image: "" },
    // { ref: "410", name: "Camisola Cetim",                 cats: ["pijama"],          price: 79.90,  sizes: ["P","M","G","GG"],  fabric: "Cetim · com renda no busto",        badge: "", image: "" },
    // { ref: "284", name: "Sutiã Bralette Plus",            cats: ["plus","sutia"],    price: 59.90,  sizes: ["52","54","56"],    fabric: "Renda · sem bojo · plus",           badge: "", image: "" },
    // { ref: "320", name: "Conjunto Plus Renda",         cats: ["plus","conjunto"],      price: 99.90,  sizes: ["48","50","52","54"],   fabric: "Renda · sutiã + calcinha plus",   badge: "Plus", image: "" },
    // { ref: "333", name: "Calcinha Plus Conforto",      cats: ["plus","calcinha"],      price: 29.90,  sizes: ["46","48","50","52"],   fabric: "Algodão · cós duplo · plus",      badge: "", image: "" },
    // { ref: "285", name: "Cinta Abertura Lateral",      cats: ["modelador"],            price: 99.90,  sizes: ["P","M","G","GG","3G"], fabric: "Modelador · zíper lateral",       badge: "", image: "" },
  ],

  atacado: {
    eyebrow: "Para lojistas e revendedoras",
    title: "Venda H.W. Sanlex na sua loja",
    text: "Somos confecção: você compra direto de quem fabrica, com preço de atacado, grade fechada ou sortida e reposição ágil para o ano inteiro.",
    bullets: [
      { strong: "Pedido mínimo acessível", rest: " — comece com pouco e reponha o que girar." },
      { strong: "Grade do P ao GG", rest: " — atenda todas as clientes da sua região." },
      { strong: "Envio para todo o Brasil", rest: " com transportadora e Correios." }
    ],
    cta: "Falar com o comercial no WhatsApp",
    quote: "Trabalhar com a Sanlex é ter pronta-entrega e qualidade na mesma caixa.",
    quoteAuthor: "— Lojistas parceiras de RJ, MG e ES",
    whatsappMessage: "Olá! Sou lojista e quero saber sobre o atacado da Sanlex."
  },

  about: {
    eyebrow: "A Sanlex",
    title: "Moda íntima feita com mão de costureira",
    paragraphs: [
      "Nascemos em Conselheiro Paulino, em Nova Friburgo — a maior região de moda íntima do país. Desde 2011 a Sanlex Confecções desenha, corta e costura cada peça pensando no que importa de verdade: caimento, conforto e durabilidade.",
      "Trabalhamos com tecidos como microfibra, cetinete, renda e algodão, em modelagens que vão do P ao GG, para que nenhuma mulher fique de fora. Atendemos do consumidor final ao lojista, sempre direto da fábrica."
    ],
    sealNumber: "14",
    sealLabel: "anos de atelier",
    image: "",
    stats: [
      { value: "+5.000", label: "peças/mês" },
      { value: "+20", label: "modelos ativos" },
      { value: "100%", label: "produção nacional" }
    ]
  },

  follow: {
    eyebrow: "Acompanhe os lançamentos",
    title: "Novidades primeiro no Instagram",
    text: "Lançamentos de coleção, grades disponíveis e bastidores da fábrica. Chame no direct ou no WhatsApp para preços de atacado."
  },

  footer: {
    blurb: "Confecção de lingerie feminina em Nova Friburgo / RJ. Atacado e varejo, com envio para todo o Brasil.",
    tagline: "Feito com cuidado de atelier · Nova Friburgo / RJ",
    contactTitle: "Atendimento",
    columns: [
      { title: "Loja", links: [
        { label: "Coleção completa", href: "#colecao" },
        { label: "Categorias", href: "#categorias" },
        { label: "Comprar no atacado", href: "#atacado" }
      ]},
      { title: "A empresa", links: [
        { label: "Nossa história", href: "#sobre" },
        { label: "Contato", href: "#contato" }
      ]}
    ]
  },

  /* -- Rótulos da interface (drawer, catálogo, toasts, checkout) ----------- */
  ui: {
    /* Catálogo */
    catalogEyebrow: "Catálogo",
    catalogTitle: "A coleção H.W. Sanlex",
    catalogPriceNote: "Preços de varejo. Lojista? Veja as",
    catalogWholesaleLink: "condições de atacado",
    catalogAllLabel: "Todos",
    catalogFavLabel: "Favoritos",
    sortLabel: "Ordenar",
    sortRelevance: "Relevância",
    sortAsc: "Menor preço",
    sortDesc: "Maior preço",
    sortAz: "Nome A–Z",
    catalogEmptyTitle: "Nada por aqui ainda",
    catalogFavEmptyHint: "Toque no coração das peças que você ama para guardá-las aqui.",
    catalogCategoryEmptyHint: "Tente outra categoria.",
    productRefPrefix: "REF ",
    productFavLabel: "Favoritar",
    productUnfavLabel: "Remover dos favoritos",
    productAddLabel: "Sacola",

    /* Drawer */
    cartTitle: "Sua sacola",
    favTitle: "Seus favoritos",
    cartEmpty: "Sua sacola está vazia",
    favEmpty: "Nenhum favorito ainda",
    cartEmptyHint: "Adicione peças da coleção para começar seu pedido.",
    favEmptyHint: "Toque no coração das peças que você ama.",
    viewCollection: "Ver a coleção",
    subtotal: "Subtotal",
    checkoutNote: "Frete e formas de pagamento são combinados no WhatsApp ao finalizar.",
    checkoutCta: "Finalizar pedido no WhatsApp",
    addToBag: "Adicionar à sacola",
    remove: "remover",

    /* Toast */
    toastAdded: "Adicionado: ",
    toastFaved: "Salvo nos favoritos: ",

    /* Mensagem de checkout enviada ao WhatsApp */
    checkoutGreeting: "Olá H.W. Sanlex! Gostaria de finalizar este pedido:",
    checkoutPaymentQuestion: "Pode me passar formas de pagamento e frete?"
  }
};

export default config;
