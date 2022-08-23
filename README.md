## Link:

[Site com os três tipos tags](https://andersonr-o.github.io/Html-Css/Select%2C%20Datalist%20%26%20Textarea/form007.html)

# Select, Datalist e Textarea

## Select

O select cria uma lista de possibilidades/opções com a tag &lt;select&gt; e a tag &lt;option&gt;.

Ficando parecido com isso:

![select-example](https://user-images.githubusercontent.com/97858145/186180659-bf4492ad-d9c3-484b-b750-41c2929e9ef4.png)

A tag &lt;optgroup&gt; é só para diferenciar diferentes grupos de &lt;option&gt;. No exemplo acima, eu as usei para separar as regiões dos estados: um para os estados do Sudeste e um para os estados do Nordeste.

Podemos ver que há um atributo label dentro de &lt;optgroup&gt;, mas ele serve para identificar o optgroup e não para fazer relação.

O resultado do código acima é esse:

![select-example-graphics](https://user-images.githubusercontent.com/97858145/186181424-ddeae746-ced0-4f96-b64f-ebaa5b330bda.png)

Se quisermos deixar um valor já seleiconado quando a página carregar (Minas Gerais no exemplo acima), usamos o atributo `checked` dentro da &lt;option&gt; em questão.

## Datalist

O select cria uma lista de opções, mas o usuário não consegue digitar algo na caixa que não esteja na lista. Para isso usamos o &lt;datalist&gt;.

Antes de usar o datalist, criamos um input do tipo texto e adicionamos um atributo chamado `list=""`.

Dentro do list, terá que ter o id do datalist para fazer relação, igual ao [label](https://github.com/andersonr-o/HTML5-CSS3/tree/Label).

O código ficará parecido com este:

![datalist-code](https://user-images.githubusercontent.com/97858145/186182625-392385a3-5e76-4511-af1e-3b4dd2a45655.png)

E o resultado será esse:

![datalist-example](https://user-images.githubusercontent.com/97858145/186182872-7667e750-7a13-4b75-8429-29dcc378b66a.png)

Mas dessa vez, se a profissão do usuário não for nenhuma das três da lista, ele poderá digitá-la.

**Relembrando:** O &lt;label&gt; faz relação com o id do input e o list de &lt;input&gt; faz relação com o id de &lt;datalist&gt; e é dentro de &lt;datalist&gt; que irão os &lt;option&gt;.

## Textarea

O &lt;textarea&gt; cria uma caixa de texto assim:

![textarea-example](https://user-images.githubusercontent.com/97858145/186186921-de665513-54fa-4be3-bc51-b00b8564d4a1.png)

O código é simples, veja só:

![textarea-code](https://user-images.githubusercontent.com/97858145/186186744-67449b42-6894-4168-8de8-54e64c6119b8.png)

**O tamanho da caixa** é definido pelo desenvolvedor nos atributos `cols=""` e `rows=""` que vemos no código acima.

Mas isso é só o tamanho do quadrado, se o usuário ultrapassar esse quadrado com o seu texto, ainda continuará funcionando, pois o &lt;textarea&gt; é infinito.

**Importante:** quando usar &lt;textarea&gt;, deixe o método do formulário como POST, pois assim mensagens grandes digitadas pelo usuário também serão enviadas para o backend.
