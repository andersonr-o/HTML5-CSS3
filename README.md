## Link para Acesso ao Site:

[Site com iframe opcional](https://andersonr-o.github.io/Html-Css/Navegando-em-iframes/iframe004.html)

# Navegando no iframe

Você sabia que conseguimos criar uma caixa vazia e preenchê-la quando o usuário clicar em um link?

Para isso basta criar um iframe com nome e um link/âncora com target="nome do iframe".

Por exemplo:

``<a href="site-estrela.com" target="xyz"> Clique Aqui!</a>``<br>
``<iframe name="xyz" src=""></iframe>``

Perceba que o name do iframe é = "xyz" e o target do link também.

Quando o usuário clicar na âncora/link, o site estrela (fictício, nesse caso) será exibido no iframe, pois eles estão conectados.
