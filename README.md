## Link para acesso aos sites:

[Site com os tipos de preenchimento de uma caixa](https://andersonr-o.github.io/Html-Css/Usando-Imagens-de-Fundo/fundo01.html)<br>
[Site mostrando o background-repeat](https://andersonr-o.github.io/Html-Css/Usando-Imagens-de-Fundo/fundo02.html)<br><br>

O primeiro site mostra as três maneiras que temos de preencher uma box e também contém uma imagem de fundo na sua estrutura.<br>
O segundo site é uma demonstração do que veremos no artigo. Lá está sendo mostrado o repeat-y.

# Usando Imagens de Fundo em Sites

Para isso, usamos a seguinte sintaxe na CSS:<br><br>
```background-image: url(caminho da imagem de fundo);```<br><br>
**Tomar cuidado com o tamanho da caixa X o tamanho da imagem, pois se a imagem for menor que a caixa, ela ficará sendo duplicada, triplicada, etc. até preencher toda a caixa.<br>
E se a imagem for maior que a caixa, ela ficará cortada e será parcialmente mostrada.**
## Background-size:
Define o tamanho que cada imagem terá no fundo.<br>
Por exemplo: ```background-size: 100px 101px```. A imagem terá 100px de largura (width) e 101px de altura (height).

## Background-repeat:
Trata-se de como e quantas vezes a imagem de fundo será repetida. Há algumas opções para a configuração, vejamos:
### Repeat:
É a configuração padrão da CSS. Ela faz com que a imagem repita até o final da tela. Igual no exemplo abaixo:<br><br>
![repeat-550](https://user-images.githubusercontent.com/97858145/176045578-d71131e4-3468-4192-82c5-983ee7257d79.png)
### No-repeat:
Como o próprio nome diz, essa propriedade não permite que a imagem de fundo seja repetida, ou seja, só haverá uma dela, como no exemplo abaixo:<br><br>
![bgrepeat:  norepeat-600](https://user-images.githubusercontent.com/97858145/176046601-5d5edb47-4a4f-41e9-afbc-c4c8b8719aa4.png)
### Repeat-x:
Repete a imagem somente no eixo X (horizontal). Exemplo:<br><br>
![bgrepeat: repeat-x-600](https://user-images.githubusercontent.com/97858145/176047155-a343feba-c930-4d52-9bbc-df7f0eb71b4b.png)
### Repeat-y:
Por fim, temos o repeat-y, que nada mais é do que o repeat-x, mas dessa vez repetindo o background no eixo Y (vertical). Por exemplo:<br><br>
![bgrepeat: repeat-y-600](https://user-images.githubusercontent.com/97858145/176047568-59c7973f-abf4-4bf1-850f-3bd71842fdde.png)
