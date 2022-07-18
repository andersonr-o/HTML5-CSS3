## Link para Acesso ao Site:

[Site com Tabela Agrupando Colunas](https://andersonr-o.github.io/Html-Css/Agrupando-Colunas-em-Tabelas/tabela-colgroup.html)

# Agrupando Colunas na Tabela

A tag &lt;colgroup&gt; nos permite selecionar toda uma coluna para formatarmo-la como desejarmos.

Dentro de colgroup, usamos a tag &lt;col&gt;. Cada tag "col" representa uma coluna da nossa tabela. Por exemplo:

``<colgroup>``<br>
``<col id="1">``<br>
``<col id="2">``<br>
``</colgroup>``

A primeira &lt;col&gt; diz respeito à primeira coluna; a segunda &lt;col&gt; diz respeito à segunda coluna, e assim por diante. O próprio HTML faz essa divisão.

## Span

Podemos usar uma &lt;col&gt; para duas colunas, basta usarmos ``span="2"``. (A mesma coisa se aplica para mais colunas.)

Se usarmos ``<col id="1" span="2">`` significa que aquela "col" refrencia a si mesma e mais uma (total = 2). A referência é sempre sobre a coluna seguinte.
