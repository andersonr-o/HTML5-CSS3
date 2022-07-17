## Link para Acesso ao Site:

[Tabela com Cabeçalho Fixo](https://andersonr-o.github.io/Html-Css/Cabe%C3%A7alho-Fixo-em-Tabelas/tabela02.html)

# Cabeçalho Fixo em Tabelas Grandes

Para fazermos o cabeçalho da tabela rolar junto com a tabela, precisamos deixar o &lt;table&gt; como ``position: relative`` e o &lt;tr&gt; do cabeçalho com as seguintes configurações:

``position: sticky;`` &rightarrow; para o cabeçalho rolar junto 

``top: -1px`` &rightarrow; para ele ficar alinhado com a tabela (se estívessemos fazendo um rodapé fixo, usaríamos ``bottom: -1px;``)

``background-color: mesma cor do <tr> de antes``

## Resultado Final:

https://user-images.githubusercontent.com/97858145/179428411-d2a90127-3378-4d8f-89fd-71a86d3a61c4.webm
