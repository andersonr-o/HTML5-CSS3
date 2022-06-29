## Link para Acesso ao Site

[Site mostrando uma caixa posicionada ao centro com responsividade](https://andersonr-o.github.io/Html-Css/Alinhamento-Vertical-de-Caixas/fundo07.html)

# Centralização Vertical de Caixas

Para conseguirmos fazer isso, precisamos de uma caixa pai (container) e uma caixa filho (conteúdo).

O container tem que ter position relative e o conteúdo precisa ter postition absolute.

Isso fará com que o conteúdo seja referenciado no container, isto é, o conteúdo ficará, originalmente, posicionado na parte esquerda superior do container, igual na imagem abaixo.

![Position-600](https://user-images.githubusercontent.com/97858145/176559885-7ffe8b2a-0652-49d9-a4d8-b452a57c5aee.png)

## Top, left, right, center e bottom

Esses cinco elementos listados acima podem nos ajudar a posicionar melhor a imagem de fundo que vimos acima.

Se usarmos um ```top: 50%;``` e um ```left: 50%;```, a imagem ficará 50% abaixo do topo da tela e 50% à direita da lateral esquerda da tela.

Imagem demonstrativa de como ficaria:

![without-transform-600](https://user-images.githubusercontent.com/97858145/176560003-953ecc64-9ac3-4d53-a1cc-4b4cadcddcaa.png)

## Transform: translate();

O transform muda a posição da caixa a partir de onde ela está (no nosso caso, a nossa está na esquerda superior, grudada ao container, como visto na primeira imagem

Se a imagem estiver posicionada na direita inferior (como está sendo demonstrado na imagem 2) e eu deslocar ela usando o ```transform: translate(-50%);```, isso significa que a imagem deslocará 50% do seu tamanho para a esquerda, ficando entre o 3° e o 4° quadrante, como a imagem abaixo.<br><br>

![transform(-50)-600](https://user-images.githubusercontent.com/97858145/176560279-d000975e-3232-487c-a18d-144ad55a9e48.png)

Agora, se eu usar o ```transform: translate(-50%, -50%);```, ela deslocará 50% do seu tamanho para o lado (width) e mais 50% para cima (height), ficando no ponto de intersecção entre os 4 quadrantes do plano cartesiano.<br><br>

Nesse caso, há responsividade e nosso objetivo foi atingido. Teste no [site](https://andersonr-o.github.io/Html-Css/Alinhamento-Vertical-de-Caixas/fundo07.html) e também veja como ficaria na imagem abaixo:<br><br>

![centralizado-600](https://user-images.githubusercontent.com/97858145/176560491-b6498771-dc5a-43a5-8352-2cc7285197ca.png)

## Se os dois métodos deslocam a imagem, por que não usar somente um?

A princípio daria tudo certo excluir o transform da vida do top, left, etc. ou vice-versa. Porém, quando diminuíssemos o tamanho da tela usando somente o transform, a caixa ficaria presa ao local aonde está e o fundo se moveria sozinho.

E se usássemos somente o top, center, etc., o conteúdo se moveria desproporcionalmente em relação ao container, que causaria desorganização no visual do usuário com tela de menor tamanho.

Também é possível centralizar uma caixa usando display flex ou grid, mas por enquanto fiquemos somente com esse conceito.
