# Degradê
## Como criar o estilo degradê para o seu site com CSS3 
 Para isso, usamos o código: ```background-image: linear-gradient(to direção, cor inicial, 2° cor, n cor);```<br>
 O exemplo que demos no nosso CSS:<br><br>
 ```background-image: linear-gradient(to right, #4967C6 10%, #DD4177, #ED4963, #FFBA4E, #E9466C);```<br><br>
 **Pode-se colocar quantas cores quiser**<br><br>
 A porcentagem ao lado da primeira cor representa o espaço que aquela cor ocupará na tela. O restante será dividido normalmente entre as outras cores.
## Ajustes na CSS
### Configurações Globais
 São configurações que serão usadas para todo o código CSS. Por isso é chamada global.<br><br>
 Usamos o seguinte código para representá-las:
 ```*{ height: 100%; }```<br><br>
 Elas servem, nesse caso específico do height 100%, para que o degradê alcançe 100% da página. Se não a usássemos e quiséssemos usar a direção to top (debaixo para cima), o degradê ficaria todo zebrado. Com essa configuração global isso não acontece.
 ### Background-attachment
 Serve para que o degradê atinja também a parte inferior da tela.<br><br>
 Para isso, usamos o código: ```background-attachment: fixed;```<br><br>
 Caso não o usássemos, a tela ficaria com a parte de baixo faltando com harmonia em relação ao todo.
 ## Outra Maneira de Representar o Degradê:
 A primeira forma vista no topo da página estabelece uma direção para o degradê. Desta vez estabeleceremos uma forma.<br><br>
Assim, usamos o código: ```background-image: radial-gradient(forma, cor inicial, 2° cor, ...n cor);```<br><br>
Pegando o mesmo exemplo do código anterior, mas mudando para um círculo:<br><br>
```background-image: radial-gradient(circle, #4967C6 10%, #DD4177, #ED4963, #FFBA4E, #E9466C);```
## As partes formam o todo.
Criar um degradê em CSS não é difícil, mas pular os conceitos de harmonia das cores, representatividade e paleta de cores talvez não permitisse que um degradê bonito fosse criado e poderia acabar frustrando o usuário.<br>
Por isso que às vezes pode acabar sendo chato estudar esses conceitos, mas o resultado final de qualidade depende disso.
