# Guia de Fotos — Sanlex Site

## Estrutura de pastas

```
public/img/
├── produtos/     → foto principal de cada produto (aparece no card da loja)
├── categorias/   → foto de capa de cada categoria (6 cards da grade de categorias)
├── hero/         → foto do banner principal (seção hero)
└── sobre/        → foto da seção "Nossa história"
```

---

## Convenção de nomes

### Produtos
Padrão: `ref{REF}-frente.jpg` e (opcional) `ref{REF}-costas.jpg`

Exemplos:
- `ref142-frente.jpg`  → Conjunto Renda Aurora — foto de frente
- `ref142-costas.jpg`  → Conjunto Renda Aurora — foto de costas (uso futuro)
- `ref156-frente.jpg`  → Conjunto Microfibra Essencial — foto de frente
- `ref143-frente.jpg`  → Conjunto Renda Serena (verde) — foto de frente

### Categorias
Padrão: `{id-da-categoria}.jpg`  (mesmo id do site.config.ts)

- `sutia.jpg`
- `calcinha.jpg`
- `conjunto.jpg`
- `modelador.jpg`
- `pijama.jpg`
- `plus.jpg`

### Hero
`hero.jpg` (foto horizontal, mínimo 1400px de largura)

### Sobre
`sobre.jpg` (foto da fábrica, equipe ou ambiente)

---

## Fotos desta sessão — onde salvar cada uma

| Foto enviada         | Salvar como                           | Usado em                              |
|----------------------|---------------------------------------|---------------------------------------|
| Vermelho — frente    | `produtos/ref142-frente.jpg`          | Produto REF 142 + Categoria Conjuntos |
| Vermelho — costas    | `produtos/ref142-costas.jpg`          | (reserva / galeria futura)            |
| Azul — frente        | `produtos/ref156-frente.jpg`          | Produto REF 156                       |
| Azul — costas        | `produtos/ref156-costas.jpg`          | (reserva / galeria futura)            |
| Verde mint — frente  | `produtos/ref143-frente.jpg`          | Produto REF 143 (novo)                |

Obs: para a categoria "Conjuntos", copie `ref142-frente.jpg` também como
`categorias/conjunto.jpg` — é a foto mais impactante do lote.

---

## Como referenciar no site.config.ts

```ts
// produto
{ ref: "142", image: "/img/produtos/ref142-frente.jpg", ... }

// categoria
{ id: "conjunto", image: "/img/categorias/conjunto.jpg", ... }

// hero
hero: { image: "/img/hero/hero.jpg", ... }
```

Todos os campos `image: ""` no config já estão prontos para receber o caminho.
