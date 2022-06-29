## Link para Acesso ao Site

[#]()

# Centralização Vertical de Caixas

Para conseguirmos fazer isso, precisamos de uma caixa pai (container) e uma caixa filho (conteúdo).<br><br>

O container tem que ter position relative e o conteúdo precisa ter postition absolute.<br><br>

Isso fará com que o conteúdo seja referenciado no container, isto é, o conteúdo ficará, originalmente, posicionado na parte esquerda superior do container, igual na imagem abaixo.<br><br>

img 1

## Top, left, right, center e bottom

Esses quatro elementos listados acima podem nos ajudar a posicionar melhor a imagem de fundo que vimos acima.<br><br>

Se usarmos um ```top: 50%;``` e um ```left: 50%;```, a imagem ficará 50% abaixo do topo da tela e 50% à direita da lateral esquerda da tela.<br><br>

Imagem demonstrativa de como ficaria:<br><br>

img 2

## Transform: translate();

Muda a posição da caixa a partir de onde ela está (no nosso caso, a nossa está na esquerda superior, grudada ao container, como visto na primeira imagem

Se a imagem estiver posicionada na direita inferior (como está sendo demonstrado na imagem 2) e eu deslocar ela usando o ```transform: translate(-50%);```, isso significa que a imagem deslocará 50% do seu tamanho para a esquerda, ficando entre o 3° e o 4° quadrante, como a imagem abaixo.<br><br>

img 2

Agora, se eu usar o ```transform: translate(-50%, -50%);```, ela deslocará 50% do seu tamanho para lado e mais 50% para cima, ficando no ponto de intersecção entre os 4 quadrantes do plano cartesiano.<br><br>

Veja como ficaria na imagem abaixo:<br><br>

img 3

## Se os dois métodos deslocam a imagem, por que não usar somente um?

A princípio daria tudo certo excluir o transform da vida do top, left, etc. ou vice-versa. Porém, quando diminuíssemos o tamanho da tela usando somente o transform, a caixa ficaria presa ao local aonde está e o fundo se moveria sozinho.<br><br>

E se usássemos somente o top, center, etc., o conteúdo se moveria desproporcionalmente em relação ao container, que causaria desorganização no visual do usuário com tela de menor tamanho.
