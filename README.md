## Links para acesso aos sites:
[Site interativo](https://andersonr-o.github.io/Html-Css/pseudo-class-pseudo-elementos/hover.html) que mostra um texto escondido quando o usuário posiciona o mouse aonde é indicado.<br><br>
Outro [Site animado](https://andersonr-o.github.io/Html-Css/pseudo-class-pseudo-elementos/pseudo-elem.html) que muda a cor das letras quando o mouse é posicionado em cima.<br><br>
Por fim, este [Site](https://andersonr-o.github.io/Html-Css/pseudo-class-pseudo-elementos/pseudo_classe.html) nos mostra três caixas normais, mas que quando posicionamos o mouse em cima, elas ficam cheias de cores gradientes.


# Pseudo-classes
 Elas são representadas por dois pontos, isto é, ":".<br><br>
 Elas têm de estar relacionadas a um elemento ou a uma classe.<br>
 Referem-se ao estado do elemento relacionado: ativo, vazio, marcado, padrão, checado, etc.
 ## :hover
 Refere-se ao estado da div de quando o mouse está posicionado sobre ele.<br>
 É quase como se fosse o mouseenter da linguagem JavaScript, mas tudo dentro de HTML.<br><br>
 **Exemplos:**<br>
  ```div:hover{```<br>
            ```background-color: aqua;```<br>
        ```}```<br><br>
        Outra situação é quando temos:<br>
    ```div:hover > p{```<br>
        ```display: block;```<br>
        ```color: white;```<br>
        ```background-color: red;```<br>
        ```width: 300px;```<br>
    ```}```<br><br>
    Ou seja, todos os parágrafos filhos da div serão atingidos pelas configurações quando o mouse estiver hover em div.<br><br>
 ## :visited
  ```a:visited{```<br>
          ```color: purple;```<br>
      ```}```<br><br>
 Isto é, quando o link já tiver sido visitado, ele ficará roxo.<br><br>
 ## :active
   ```a:active{```<br>
        ```color: darkgreen;```<br>
   ```}```<br><br>
 Então, quando o mouse estiver clicando no link, ele ficará verde escuro.
# Pseudo-elementos
 Trata-se quase da mesma coisa, mas dessa vez o pseudo-elemento se refere à posição do elemento.<br>
 Eles são representados por 2 dois pontos, "::".<br><br>
 **Exemplo:**<br>
 ## ::before
 ```a::before{```<br>
            ```content: '--> ';```<br>
        ```}```<br><br>
 Ou seja, tudo que estiver antes de a será atingido pelo content descrito.<br>
 Isso nos ajuda a não ter que escrever a mesma coisa antes de todas as âncoras no nosso HTML.<br><br>
 **Outro exemplo:**<br>
 ## ::after
 ```a::after{```<br>
            ```content: '[link]';```<br>
            ```font-weight: normal;```<br>
            ```text-decoration: none;```<br>
            ```color: darkgray;```<br>
        ```}```<br><br>
 Em vez das configurações serem adicionadas antes da âncora, nesse exemplo elas serão adicionadas depois.<br>
 Ainda há outros exemplos de pseudo-elementos que nos ajudam em situações assim e mais variadas, mas esses dois são os mais populares.
