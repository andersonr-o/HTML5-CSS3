## Link para Acesso ao Site:

[Site de uma Tabela Completa](https://andersonr-o.github.io/Html-Css/Escopos-de-T%C3%ADtulo/tabela-completa.html)<br>
[Site das Imagens do Texto](https://andersonr-o.github.io/Html-Css/Escopos-de-T%C3%ADtulo/tabela-exemplo.html) 

# Escopo de Título em Tabelas

Antes de entendermos o escopo, precisamos saber que ele não causa nenhuma mudança visual na nossa tabela.

Basicamente, ele serve para que o browser analise os dados de nossa tabela corretamente.

## Scope

A tag usada para definirmos os escopos de nossas tabelas é o &lt;scope&gt;

A tag vai no mesmo lugar de um seletor id ou class e possui dois tipos: o row e o col.

**Usamos os escopos somente nos table heads, isto é, nas tags &lt;th&gt;.**

### Scope="col"

Quando dizemos que o escopo diz respeito à coluna, é porque os dados estão na coluna a partir de onde está o título.

Por exemplo:

![scope="col"](https://user-images.githubusercontent.com/97858145/179424588-89cc261d-da37-47fd-b3f7-13aa58cbea28.png)

Perceba que Maria está na mesma coluna que o título "Nome", portanto o escopo do título "Nome" será col.

### Scope="row"

A mesma regra vale para os escopos de linha.

Dessa vez, em vez dos dados estarem embaixo do título, como na imagem acima, eles estarão ao lado, já que estão na mesma linha.

Por exemplo:

![scope="row"](https://user-images.githubusercontent.com/97858145/179424844-1cf90f57-0e7d-4f46-a28c-50fed76be626.png)

Simples, não?

## Escopos de Grupo

Para falarmos de escopos de grupo, primeiramente precisamos entender de [Mesclagem de Células](https://github.com/andersonr-o/HTML5-CSS3/tree/Mesclagem-de-C%C3%A9lulas)

Quando mesclamos uma &lt;th&gt; e seus dados estão em mais de um &lt;td&gt;, usamos os escopos de grupo.

### Colgroup

Por exemplo:

![scope="colgroup"](https://user-images.githubusercontent.com/97858145/179425277-f1782d82-1e43-45b0-9434-e6c1059766e1.png)

Nessa tabela, temos o &lt;th&gt;, que é "Filmes", e nas colunas abaixo temos seis filmes. Mas esses seis filmes estão ocupando três colunas por linha.

Isso significa que teremos que usar um escopo de grupo.

Se usarmos ``<th scope="col">Filmes</th>`` o escopo só valerá para os filmes "Alien" e "Hulk", que são os filmes localizados na primeira coluna. As demais serão esquecidas.

**Para todas as colunas entrarem no escopo, usamos ```<th scope="colgroup">Filmes</th>```**

### Rowgroup

Se fosse linhas de conteúdo em um título mesclado, usaríamos ``scope="rowgroup"``.

Exemplo de uma tabela onde precisaríamos usar ``scope="rowgroup"``:

![scope="rowgroup"](https://user-images.githubusercontent.com/97858145/179425907-b6351d04-b58f-4dc3-83cc-7855c43a1a15.png)

Se não usássemos o rowgroup no escopo dessa tabela, o dado que entraria dentro do escopo seria somente o nome da "Ana Maria Santos".

A função do escopo de grupo tem basicamente a mesma função dos escopos normais, eles só abrangem mais elementos de tabela.
