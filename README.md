## Link para Acesso ao Site:

[Tabela com Efeito Zebrado](https://andersonr-o.github.io/Html-Css/Efeito-Zebrado-em-Tabelas/tabela02.html)

# Efeito Zebrado em Tabelas

Para criar efeito zebrado em tabelas HTML (linha branca - linha cinza), usamos uma propriedade simples na CSS que faz todo o trabalho automático, em vez de selecionarmos manualmente linha por linha.

Isso é bom porque evita trabalho desnecessário caso uma linha nova seja adicionada na tabela mais para frente e ela for muito grande.

Todo o trabalho de selecionar linha por linha teria de ser feito caso essa propriedade não existisse.

## Criando o Efeito

Para isso, usamos a [pseudo-classe](https://github.com/andersonr-o/HTML5-CSS3/tree/Pseudo-Class-Pseudo-Elementos) ":nth-child()".

Para um efeito zebrado nas linhas da tabela, o código ficaria assim:

``tr:nth-child(2n){``

    ``background-color: gray;``
``}``

Isto é, de duas em duas linhas haverá fundo na cor cinza.

Se a tabela estiver num body branco o efeito zebrado já está pronto.

Agora, se o background-color do body for diferente, basta repetir a pseudo-class para as outras linhas, ficando assim:

``tr:nth-child(2n-1){``

    ``background-color: white;``
``}``

Assim as linhas que não são cinzas serão brancas.

No lugar de "2n" e "2n-1" também podemos usar "even" e "odd" (par e ímpar). Todas as linhas pares colocamos de cinza e todas as ímpares colocamos de branco.
