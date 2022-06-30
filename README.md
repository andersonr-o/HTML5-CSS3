## Link para Acesso ao Site:

[Site mostrando o cover na imagem de fundo](https://andersonr-o.github.io/Html-Css/Tamanho-da-Imagem-de-Fundo/fundo05.html)

Embora o cover redimensione a imagem, nem sempre é possível não deixar espaço em branco com ele. Uma prova disso é quando minimizamos esse site.

# Mudando o Tamanho da Imagem de Fundo

## Considerações Importantes

Em um site, o browser interpreta primeiramente o conteúdo e só depois a imagem, então pode acontecer de só mostrar o conteúdo e só depois de alguns segundos mostrar a imagem, quando o site carregar completamente.<br><br>

Saber disso é importante para cuidarmos do conteúdo e de tudo o que não é imagem, evitando que o usuário se assuste ou se entendie com uma tela incomum.

## Elemento Usado para Mudar o Tamanho da Imagem

Usamos, para isso, o background-size. Há algumas maneiras de definir o tamanho. Vou comentar quatro delas e suas características.

### Background-size: Xpx;

Essa configuração mostra a imagem em uma tela de x pixels, mas ao aumentar ou diminui-la, ela deixa o conteúdo do body mais vazio.

### Background-size: X% X%;

Mostra a imagem na tela inteira (100%), mas quanto menor a tela, mais achatada a imagem; e quanto maior a tela, mais esticada a imagem (nesse caso já está em 100%, então não esticaria).<br>
Essa configuração, por exemplo, exige ```height: 100%;``` no fundo.

### Background-size: contain;

Exibe a imagem cheia e sem achatar ou esticar nas mudanças de tela, mas usa o tamanho real da imagem.<br><br>

Isso quer dizer que se tivéssemos uma imagem com um width menor que o width da caixa dela (o fundo do site, por exemplo), as laterais ficariam vazias. A mesma coisa poderia acontecer com o topo, com a parte de baixo, etc.

### Background-size: cover;

O cover preenche o fundo inteiramente com a imagem, mesmo que a imagem tenha um tamanho diferente da caixa. Em mudanças de tamanho de tela a inagem continua preenchendo a totalidade do fundo.<br><br>
Tudo isso porque o cover redimensiona o tamanho da imagem automaticamente e faz ela se igualar ao tamanho da caixa de fundo, sem deixar nenhum espaço vazio.<br><br>
