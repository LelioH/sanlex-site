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
  }
};

/* ---------------------------------------------------------------------------
   2) CONFIG GERAL DO SITE
--------------------------------------------------------------------------- */
export const config: SiteConfig = {
  /* -- SEO: título e descrição da aba do navegador / mecanismos de busca -- */
  seo: {
    lang: "pt-BR",
    title: "Sanlex · Moda Íntima — Confecção de Lingerie",
    description: "Sanlex Confecções — lingerie feminina com acabamento de atelier. Sutiãs, calcinhas, conjuntos, modeladores e plus size. Atacado e varejo, de Nova Friburgo (RJ)."
  },

  activeTheme: "classic",   // id de algum tema acima

  settings: {
    currency: "R$",
    freeShippingFrom: 300,
    installments: "3x sem juros",
    showThemeSwitcher: true,  // false em produção para esconder o seletor
    storageKey: "sanlex"      // prefixo do localStorage (mude se trocar de marca)
  },

  brand: {
    name: "Sanlex",
    legalName: "Sanlex Confecções",   // nome jurídico usado no rodapé
    badge: "Moda Íntima",
    since: "2011"
  },

  contact: {
    whatsapp: "5522999999999",      // <-- TROQUE: 55 + DDD + número (só dígitos)
    instagramMain: "https://instagram.com/hwsanlex",
    instagramSecondary: "https://instagram.com/sanlexconfeccoes",
    addressLine: "Rua Sanglard, 156 — Conselheiro Paulino",
    city: "Nova Friburgo · RJ",
    hours: "Seg a Sex · 8h–18h",
    cnpj: "14.193.159/0001-84",
    whatsappFloatMessage: "Olá Sanlex! Vim pelo site e gostaria de informações.",
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
    "Frete grátis acima de R$300", "Confecção própria", "Do P ao G3", "Atacado & varejo",
    "Envio p/ todo o Brasil", "Pague no Pix ou cartão", "Qualidade de atelier", "Nova Friburgo · RJ"
  ],

  hero: {
    eyebrow: "Confecção própria · desde 2011",
    title: "Lingerie que veste o corpo",
    titleEmphasis: "e a confiança.",
    lede: "Sutiãs, calcinhas, conjuntos, modeladores e plus size com acabamento de atelier — feitos peça por peça em Nova Friburgo, no coração da moda íntima do Brasil.",
    image: "",
    ctaPrimary: { label: "Ver a coleção", href: "#colecao" },
    ctaSecondary: { label: "Comprar no atacado", href: "#atacado" },
    stats: [
      { value: "14+", label: "anos de fábrica" },
      { value: "P ao G3", label: "todas as curvas" },
      { value: "RJ", label: "produção nacional" }
    ],
    tagCard: {
      label: "Etiqueta Sanlex",
      product: "Cetinete Power",
      swatches: ["#43141f", "#b85c72", "#ead9cf", "#2c2c2c"],
      ref: "REF 144 · P ao GG",
      price: "R$ 64,90"
    }
  },

  /* glyph: "sutia" | "calc" | "set" | "shape" | "sleep" | "plus" */
  categories: [
    { id: "sutia",     name: "Sutiãs",      glyph: "sutia", c1: "#f3dfdc", c2: "#c98ea0", image: "" },
    { id: "calcinha",  name: "Calcinhas",   glyph: "calc",  c1: "#ead9cf", c2: "#b85c72", image: "" },
    { id: "conjunto",  name: "Conjuntos",   glyph: "set",   c1: "#f6ece6", c2: "#9d4459", image: "" },
    { id: "modelador", name: "Modeladores", glyph: "shape", c1: "#e7c3c6", c2: "#5d1f2d", image: "" },
    { id: "pijama",    name: "Pijamas",     glyph: "sleep", c1: "#f3dfdc", c2: "#a8845b", image: "" },
    { id: "plus",      name: "Plus Size",   glyph: "plus",  c1: "#ead9cf", c2: "#43141f", image: "" }
  ],

  products: [
    { ref: "001", name: "Sutiã Bojo Microfibra",      cats: ["sutia"],                price: 49.90,  sizes: ["P","M","G","GG"],      fabric: "Microfibra · bojo fixo",          badge: "Mais vendido", image: "" },
    { ref: "144", name: "Sutiã Cetinete Power",        cats: ["sutia"],                price: 64.90,  sizes: ["P","M","G","GG"],      fabric: "Cetinete · alça regulável",       badge: "", image: "" },
    { ref: "058", name: "Sutiã Sem Bojo Algodão",      cats: ["sutia"],                price: 39.90,  sizes: ["P","M","G","GG"],      fabric: "Algodão · sem costura",           badge: "", image: "" },
    { ref: "150", name: "Sutiã Amamentação",           cats: ["sutia"],                price: 57.90,  sizes: ["M","G","GG","3G"],     fabric: "Microfibra · abertura frontal",   badge: "", image: "" },
    { ref: "107", name: "Calcinha Caleçom",            cats: ["calcinha"],             price: 24.90,  sizes: ["P","M","G","GG"],      fabric: "Microfibra · cobertura total",    badge: "", image: "" },
    { ref: "172", name: "Calcinha Tanga Renda",        cats: ["calcinha"],             price: 19.90,  sizes: ["P","M","G","GG"],      fabric: "Renda · lateral fina",            badge: "", image: "" },
    { ref: "211", name: "Calcinha Fio Microfibra",     cats: ["calcinha"],             price: 17.90,  sizes: ["P","M","G"],           fabric: "Microfibra · fio dental",         badge: "", image: "" },
    { ref: "088", name: "Calcinha Modeladora Alta",    cats: ["calcinha","modelador"], price: 34.90,  sizes: ["P","M","G","GG"],      fabric: "Cintura alta · compressão suave", badge: "", image: "" },
    { ref: "142", name: "Conjunto Renda Aurora",       cats: ["conjunto"],             price: 89.90,  sizes: ["P","M","G","GG"],      fabric: "Renda · sutiã + calcinha",        badge: "Novo", image: "" },
    { ref: "156", name: "Conjunto Microfibra Essencial",cats: ["conjunto"],            price: 74.90,  sizes: ["P","M","G","GG"],      fabric: "Microfibra · básico do dia",      badge: "", image: "" },
    { ref: "199", name: "Conjunto Noiva Branco",       cats: ["conjunto"],             price: 119.90, sizes: ["P","M","G"],           fabric: "Renda francesa · detalhe pérola", badge: "", image: "" },
    { ref: "285", name: "Cinta Abertura Lateral",      cats: ["modelador"],            price: 99.90,  sizes: ["P","M","G","GG","3G"], fabric: "Modelador · zíper lateral",       badge: "", image: "" },
    { ref: "286", name: "Cinta Fio Modeladora",        cats: ["modelador"],            price: 109.90, sizes: ["P","M","G","GG"],      fabric: "Compressão média · sem marcar",   badge: "", image: "" },
    { ref: "301", name: "Body Redutor",                cats: ["modelador"],            price: 129.90, sizes: ["M","G","GG","3G"],     fabric: "Modelador integral · alça larga", badge: "Top", image: "" },
    { ref: "410", name: "Camisola Cetim",              cats: ["pijama"],               price: 79.90,  sizes: ["P","M","G","GG"],      fabric: "Cetim · com renda no busto",      badge: "", image: "" },
    { ref: "422", name: "Pijama Renda Manga",          cats: ["pijama"],               price: 94.90,  sizes: ["P","M","G","GG"],      fabric: "Viscose · short + blusa",         badge: "", image: "" },
    { ref: "284", name: "Sutiã Bralette Plus",         cats: ["plus","sutia"],         price: 59.90,  sizes: ["52","54","56"],        fabric: "Renda · sem bojo · plus",         badge: "", image: "" },
    { ref: "320", name: "Conjunto Plus Renda",         cats: ["plus","conjunto"],      price: 99.90,  sizes: ["48","50","52","54"],   fabric: "Renda · sutiã + calcinha plus",   badge: "Plus", image: "" },
    { ref: "333", name: "Calcinha Plus Conforto",      cats: ["plus","calcinha"],      price: 29.90,  sizes: ["46","48","50","52"],   fabric: "Algodão · cós duplo · plus",      badge: "", image: "" },
    { ref: "283", name: "Sutiã Bralette Renda",        cats: ["sutia"],                price: 54.90,  sizes: ["46","48","50"],        fabric: "Renda · costas nadadora",         badge: "", image: "" }
  ],

  atacado: {
    eyebrow: "Para lojistas e revendedoras",
    title: "Venda Sanlex na sua loja",
    text: "Somos confecção: você compra direto de quem fabrica, com preço de atacado, grade fechada ou sortida e reposição ágil para o ano inteiro.",
    bullets: [
      { strong: "Pedido mínimo acessível", rest: " — comece com pouco e reponha o que girar." },
      { strong: "Grade do P ao G3", rest: " — atenda todas as clientes da sua região." },
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
      "Trabalhamos com tecidos como microfibra, cetinete, renda e algodão, em modelagens que vão do P ao G3, para que nenhuma mulher fique de fora. Atendemos do consumidor final ao lojista, sempre direto da fábrica."
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
    catalogTitle: "A coleção Sanlex",
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
    checkoutGreeting: "Olá Sanlex! Gostaria de finalizar este pedido:",
    checkoutPaymentQuestion: "Pode me passar formas de pagamento e frete?"
  }
};

export default config;
