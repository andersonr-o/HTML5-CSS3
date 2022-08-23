## Links para os Sites:

[Site com Output de soma](https://andersonr-o.github.io/Html-Css/Output%20em%20Formul%C3%A1rios/form008.html);<br>
[Site com Output de range](https://andersonr-o.github.io/Html-Css/Output%20em%20Formul%C3%A1rios/form009.html);<br>
[Site que calcula idade](https://andersonr-o.github.io/Html-Css/Output%20em%20Formul%C3%A1rios/form010.html)

# Output em Formulários

O &lt;output&gt; serve para mostrar algo na tela — uma saída (a soma de dois números, por exemplo).

Para o &lt;output&gt; funcionar precisa de um id para ser referenciado no &lt;label&gt; e o mesmo id para ser calculado no script.

Se queremos somar dois números, usamos dois inputs para receber os números e um output para mostrar a soma.

O código no input será normal e depois adicionamos o "oninput", que já é JavaScript.

Ficando assim:

![output-code](https://user-images.githubusercontent.com/97858145/186222005-6b7533a7-e2a2-4af3-ac21-cb8721b73b94.png)

Não se preocupe se não entender, o código está em JavaScript e estamos falando de HTML.

Mas é basicamnete para isso que serve o &lt;output&gt;.

## Output para envio de dados

É importante dizer que a tag &lt;output&gt; só serve para mostrar a saída de um resultado na tela, como vimos no exemplo acima e nos sites anexados no topo do artigo.

Quando o usuário clicar no botão de enviar, o que chegará no backend será os valores dos inputs separados, e não a soma deles.
