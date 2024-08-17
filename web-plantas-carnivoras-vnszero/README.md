# cefet-web-piranha-plant

Um site informativo sobre plantas carnívoras.

## Atividade

Você tem um novo hobby: **criar plantas carnívoras**. Você encontrou um
documento solto em um antigo livro do seu tio Epaminondas e, depois de lê-lo,
decidiu **criar uma página web com seu conteúdo**. Além disso, você também tem
uma **pequena loja de sementes** dessas plantas e deseja divulgá-la em uma
página web.

### Exercício 1

Você deve pegar o documento do seu tio (arquivo:
`/documentos-do-tio/pagina-plantas-specs.pdf`) e criar uma página web com o
mesmo conteúdo e formatação. Salve o arquivo como `plantas.html`.
  - A pasta `/imagens` contém os arquivos de imagens a serem usados.

Você pode ver todas as _tags_ que precisará nos slides da aula. Veja
algumas diretrizes úteis para você marcar o texto sobre as plantas
carnívoras do tio Epaminondas:
  - Termos **em latim** (exceto nomes próprios) devem estar enfatizados em
    itálico (há uma _tag_ para isto).
  - Citações devem aparecer em itálico (há duas _tags_ para citação, mas
    você deve estilizá-las para que elas façam o texto ficar em itálico).
  - A lista não-ordenada (de bolinhas) dos tipos de plantas deve conter
    links internos que fazem a página rolar para aquela seção de texto.

Sobre a estilização:
  - As imagens devem ter uma borda (feita com CSS) conforme especificado.

### Exercício 2

Criar a página da loja seguindo o modelo do arquivo  
`/documentos-do-tio/pagina-loja.pdf`. Depois de criada, salve o arquivo
como `loja.html`. Você deve também criar um hiperlink da página `plantas.html`
para sua nova `loja.html`, e vice-versa.

### Exercício 3

Agora que você já criou as duas páginas e estilizou as duas, deve ter
criado regras de formatação em CSS dentro de elementos `<style></style>`
nas duas páginas.

Por exemplo, as regras da borda verde nas imagens pode estar repetida
nos dois arquivos.

Para evitar repetição de código, é possível escrever código CSS em um arquivo
separado e incluí-lo em cada arquivo html. Isso se chama **refatorar**:

- Em vez de:

  ```
    ...
    <style>
      ...
    </style>
  </head>
  ```
- Você pode:

  ```
  <link rel="stylesheet" href="arquivo-de-estilos.css">
  ```

- E mover suas regras CSS dentro de `<style>` para o novo `arquivo-de-estilos.css`.

Note que, caso existam regras que só se apliquem a uma página, e não às duas,
você deve criar outro(s) arquivo(s) CSS para conter apenas as regras
exclusivas de cada página. Por exemplo, considere esta estrutura de pasta:
  - `cefet-web-piranha-plant`
    - `images`
      - `...`
    - `css`
      - `estilos-comuns.css`
      - `estilos-plantas.css`
      - `estilos-loja.css`
    - `...`

## FAQ

- Qual _tag_ de citação devo usar?
  - Há citações que ocorrem no meio de uma frase (chamamos isso de `inline`) e
    outras que são grandes e precisam ficar separadas do parágrafo (chamamos
    isso de `block`):
    - Citação `inline`: usamos `<q>texto citado</q>`
    - Citação `block`: usamos `<blockquote>texto citado</blockquote>`
- Podemos usar o elemento **`<br>` (_break line_) para dar espaço**?
  - Podemos, mas esta é uma **péssima prática**. Espaçamento é um conceito
    de estilização, então deve ser feito usando CSS. Duas propriedades que
    temos à disposição é `margin-top` e `margin-bottom`. Por exemplo:
    - Não faça isto:
    
      ```html
      <h1>Título</h1>
      <br>
      <br>
      <p>Assunto</p>
      ```
    - Em vez, faça isto em html e em CSS:
    
      ```html
      <h1>Título</h1>
      <p>Assunto</p>
      ```
      
      ```css
      h1 {
        margin-bottom: 30px;
      }
      ```
- Posso usar a _tag_ `<em></em>` para deixar as coisas em itálico?
  - Essa não é a ideia. A _tag_ `<em></em>` serve para **marcar texto que**, de
    alguma forma, **possui ênfase**. Por um acaso, o padrão dos navegadores é renderizá-los em itálico.
- Os links para seções internas da página não estão funcionando.
  - Links internos (do tipo `<a href="#secao-jaula">jaula</a>`) apontam para
    algum elemento da página que possua um atributo `id` (identificador)
    igual ao texto que está à direita da `#` do link:

    ```html
    <a href="#secao-jaula">jaula</a>
    <!-- outros elementos da página... -->
    <h2 id="secao-jaula">Armadilhas jaula</h2>
    ```
- Minhas bordas da tabela estão com um espaçamento! #comofaz?
  - Para que as bordas de uma tabela fiquem todas "juntinhas", há uma
    propriedade CSS:

    ```css
    table {
      border-collapse: collapse;
    }
    ```
- Quero colocar um ícone para minha página. #comofaz?
  - Salve uma imagem no formato `.ico` e, na página HTML, dentro
    do `<head></head>`, coloque:

    ```html
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    ```
