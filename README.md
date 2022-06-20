## Link para acesso ao site:
Este site não mostra muita coisa.<br>
A sua preciosidade se encontra no código CSS, entretanto o resultado final é esse: [Site](https://andersonr-o.github.io/Html-Css/cores/representando-cores/index.html).

# Representando Cores
O arquivo index mostra, na prática, as cinco representações das cores existentes em CSS3, que são:
## Por nomes
É o mais simples e o mais famoso, mas é também um método mais limitado, onde não tem variações tão grandes de uma cor para outra. Por exemplo: ``<style>body{background color = "blue"}</style>``;
## Por códigos hexadecimais
A diferença entre o sistema de base 10 que estamos acostumados e o de base 16:<br>
Decimal: 0 1 2 3 4 5 6 7 8 9<br>
Hexadecimal: 0 1 2 3 4 5 6 7 8 9 A B C D E F. Leia como: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
### Como calcular números hexadecimais?
Basta multiplicar o número por 16 com a sua base e depois somar, se houver necessidade. Vamos pegar o número F como exemplo:<br>
F representa o número 15.<br>
F = 15x16<sup>0</sup>, isto é, 15.<br>
Agora, se pegarmos FF, ficaria assim:
F = 15x16<sup>0</sup> + F = 15x16<sup>1</sup>, ou seja, FF = 15 + 240, portanto, 255.<br>
Se fosse FFF ficaria 15x16<sup>0</sup> + 15x16<sup>1</sup> + 15x16<sup>2</sup>, ou seja, 15 + 240 + 3840 = 4095.<br><br>
*<em>Um cuidado que deve se tomar quando essa conta for feita é que o primeiro número calculado é o que vai na frente. Por exemplo:</em>*<br><br>
Vamos calcular EF: E = 14. F = 15. Ou: E = 14x16<sup>0</sup> = 14. F = 15x16<sup>0</sup>. &leftarrow; Isso representa esses números isolados, se juntarmos eles, ficariam assim:<br>
EF = Fx<sup>0</sup> + Ex16<sup>1</sup>, portanto, EF = 239.<br>
Calculamos primeiramente o F, por ser o último número (por isso teve o 16<sup>0</sup>), e o E em sequência, por ser o penúltimo número (por isso teve o 16<sup>1</sup>), depois só restou somá-los.<br><br>
### Qual o máximo suportado em CSS?
Em CSS, o máximo é 255 por cor (vermelho, verde e azul). Por isso, cada uma das três cores possuem dois espaços, onde o máximo é FF e o mínimo 00.<br>
Se você abrir o seu CSS e testar agora a cor ``#0000ff;``, verá que ela possui 0 da cor vermelho, 0 da cor verde e 255 (que é o máximo) da cor azul, logo ela será azul.

## Por RGB
O RGB (Red, Green, Blue) é, basicamente, o que foi explicado nas linhas anteriores, mas dessa vez usamos somente o sistema decimal.<br>
Se quisermos representar uma cor, basta digitarmos ``rgb(x, y, z);`` e teremos o resultado. A cor ``rgb(0, 0, 255)`` é a mesma cor que representamos em hexadecimal como ``#0000ff;``, mas dessa vez sem muito mistério.

## Por características
São elas HSL (Hue, Saturation and Lightness ou Matiz, Saturação e Luminosidade).<br>
A HSL de uma cor se conversa. Se mudarmos a saturação, a matiz também muda, porque a saturação é uma medida entre duas cores.<br><br>
A mesma coisa acontece com a luminosidade, que é a variação entre claro e escuro, mudando, assim, a saturação, e assim por diante.<br><br>
1. **Hue** é a cor obtida. Como se trata de uma linha que o usuário pode ajustar, ele não precisa ficar preso a uma cor específica e pode, por exemplo, escolher uma cor entre o amarelo e o verde, por isso matiz também pode significar gradação de cores.
Essa linha ajustável para o usuário é aquela que fica a direita quando posicionamos o mouse sobre um código de cor. Quando alteramos o hue, nenhum outro valor é alterado.<br><br>
2. **Saturation** é a pureza de uma cor, isto é, quanto mais a cor se aproxima do cinza, menos pura ela é, e seu valor fica mais próximo de 0%.<br>
Quando a cor está mais viva, ou seja, mais misturada com o preto, ela se aproxima de 100%.<br>
A saturação pode ser alterada no próprio painel de cores do CSS. No canto esquerdo superior está o cinza bem branco e no canto direito superior está a cor com mais vivacidade.<br>
Como a saturação varia entre cores (do cinza médio até a própria cor) e altera a sua vivacidade (menos ou mais brilhante), a sua alteração também gera alterações na matiz e na luminosidade.<br><br>
3. **Lightness** é a variação da cor entre o branco e o preto. Quanto mais perto de 0, mais escura a cor será, pois estará mais perto do preto.<br>
Pelo contrário, quanto mais perto de 100%, mais branca a cor estará e, por conseguinte, mais clara.<br><br>
Exemplo visual do que é HSL:<br><br>
![hsb](https://user-images.githubusercontent.com/97858145/159133817-9057def8-c5be-4ea4-b386-4ce1e777c762.png)

## Considerações Finais
Além de haver diversas formas de se chegar ao mesmo lugar, o que nos dá mais opções, também podemos estender e nos aprofundarmos nessa questão que não é somente programação, mas que pode ser fonte de conhecimento diverso para atuarmos em diversas áreas, pois todas envolvem cores.
### Círculo Cromático
É um círculo que representa as cores primárias, as secundárias e as terciárias, que são as somas das duas primeiras. Essa divisão nos ajuda a criar diversos tipos de paletas de cores (já fica outra dica de pesquisa aqui) e tornar o nosso site esteticamente muito mais bonito. A minha mistura preferida é a monocromática, que além de ser bonita, cria um efeito degradê muito bom.<br><br>
Círculo Cromático:<br><br>
![circulo-cromatico-250](https://user-images.githubusercontent.com/97858145/159134104-54b3fb17-bdb4-47a9-9eac-65cabc2cb077.jpg)<br>
Todas os estilos de cores têm uma fórmula, a da monocromática é até que simples: escolha uma cor e modifique a sua saturação e luminosidade três vezes, assim você terá uma paleta de quatro cores bonitas.<br><br>
Exemplo de um desenho usando monocromia:<br><br>
![monocromia-exemplo](https://user-images.githubusercontent.com/97858145/159134482-c90ac485-f163-4803-bf20-1fb52991d559.jpg)
