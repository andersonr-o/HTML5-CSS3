## Link para Acesso ao Site:

[Site com Tabela Grande](https://andersonr-o.github.io/Html-Css/Tabelas-Grandes/tabela02.html) 

# Como Trabalhar com Tabelas Grandes

Para trabalhar com tabelas com muitos dados, dividimos o conteúdo em três partes, igual ao grouping tags.

A anatomia ficaria assim:

```<thead>```<br>
    ```<tr>```<br>
        ```<th>XYZ</th>```<br>
    ```</tr>```<br>
```</thead>```<br><br>
```<tbody>```<br>
    ```<tr>```<br>
        ```<td>XYZ</td>```<br>
    ```</tr>```<br>
```</tbody>```<br><br>
```<tfoot>```<br>
    ```<tr>```<br>
        ```<th>XYZ</th>```<br>
    ```</th>```<br>
```</tfoot>```<br><br>

Em suma, usamos as tags &lt;thead&gt;, &lt;tbody&gt; e &lt;tfoot&gt;. Dentro delas usamos os elementos já conhecidos. Depois é só estilizar na CSS.

No exemplo do site que anexei com o link, a primeira linha ("Estado" e "População") se referem ao &lt;tfoot&gt;. Os estados em si se referem ao &lt;tbody&gt;. E o total de habitantes é o &lt;tfoot&gt;

## Caption

A tag &lt;caption&gt; basicamente é um título para a tabela.

Essa tag fica dentro da tag &lt;table&gt; e não precisa de nenhum elemento a mais, basta usá-la e escrever o título dentro da tag e alterar como quiser na CSS.

