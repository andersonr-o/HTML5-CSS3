## Link para Acesso ao Site:

[Site com tabela com um pouco de CSS](https://andersonr-o.github.io/Html-Css/Criando-Tabelas/tabela01.html)

# Criando Tabelas em HTML

## Hierarquia de Tabelas

Para criar tabelas em HTML, antes precisamos entender a  hierarquia dos elementos, senão os dados aparecerão em lugares aleatórios e bagunçará o layout.

Table = Tabela ><br>
Table Row (&lt;tr&gt;) = Linha de tabela ><br>
Table Header (&lt;th&gt;) = Cabeçalho de Tabela ><br>
Table Data (&lt;td&gt;) = Dados de Tabela.

## Criando bordas na Tabela

A tabela começa sem nada em volta, somente com o conteúd, isso significa que temos que criar a borda na CSS.

Para isso, usamos o border. O ```border: 1px solid black;``` no td.

A tabela ficaria assim:

![tabela-bordeada](https://user-images.githubusercontent.com/97858145/176796267-c8bb7f2d-a7ef-4e45-87b2-ccaa789fcbf7.png)


Quando criamos a tabela, ela fica um pouco separada entre os td's.

Isso acontece porque o border-collapse padrão da **tabela** é separate.<br>

Ao usarmos ```border:-collapse: collapse;```, todos os dados da tabela ficam ainda mais juntos, como se esttivéssemos criando uma tabela no Excel mesmo.<br>

Veja na imagem abaixo:<br>

![tabela-border-collapse](https://user-images.githubusercontent.com/97858145/176796359-176ffbeb-c744-45ff-8e61-c7fac0e68632.png)
