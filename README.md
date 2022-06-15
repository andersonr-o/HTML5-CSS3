# Fontes Online e Internas
 Nesse artigo veremos como usar fontes em nosso CSS sem precisar baixá-las, como usá-las se quisermos baixá-las, quais são os seus formatos e como capturar as fontes de um site através de um plug-in.
## Google Fonts
 No [Google Fonts](https://fonts.google.com/) há diversos tipos de fontes para se usar, além de suas famílias.<br><br>
 Selecione a categoria de fonte desejada e baixe-a ou clique em "select this style".<br><br>
 Se escolher a segunda opção, pegue o @import e coloque logo abaixo da tag &lt;style&gt; ou na primeira linha da CSS, caso esteja usando o CSS externo, pois tudo que começa com @, ou seja, uma regra na CSS, deve estar na primeira linha e fora de um seletor.<br><br>
No Google Fonts há bastante filtros e mecanismos de busca para aprofundação no tema. Há 991 famílias de fonte lá.<br><br>
**De 3 a 4 famílias de fontes para um site está ótimo. Mais que isso pode ficar confuso para o leitor.**
## Usando Fontes Externas Baixadas
 Quando a fonte não for econtrada no Google Fonts, basta procurar em outro lugar. O site [Dafont](https://www.dafont.com/pt/) também é muito bom, mas, geralmente, o cliente te passará o arquivo da fonte desejada.<br><br>
 **Na hora de escolher uma fonte, verifique se ela suporta todos os glifos (A, a, ã, á, à, ç etc.)**
## Dentro da CSS
 Coloque a regra: ```@font-face{``` <br>
                       ```font-family:'nome que quiser';```<br>
                       ```src: url('caminho da fonte baixada') format('formato da fonte');```<br>
                       ```}```<br><br>
**O nome do font-family do seletor do meu texto terá de ser o mesmo do escolhido no font-face**
### Tipos de formato de fontes
 * TrueType Fonts (ttf) - TrueType é um padrão de fonte desenvolvido no final de 1980, pela Apple e Microsoft. TrueType é o formato de fonte mais comum para ambos os sistemas operacionais Mac OS e Microsoft Windows.<br><br>
 * OpenType Fonts (otf) - OpenType é um formato para fontes de computador escaláveis. Foi construído em TrueType, e é uma marca comercial registrada da Microsoft. OpenType fontes são comumente usados hoje nas principais plataformas de computador.<br><br>
 * embedded-opentype<br><br>
 * truetype-aat (Apple Advanced Typography)<br><br>
 * svg
## Capturando Fontes de um Site
 Para isso, instalamos o plug-in "Fonts Ninja" no Chrome Web Store.<br><br>
 Depois é só selecioná-lo e passar o mouse por cima de onde deseja coletar as informações.<br>
 Lá será mostrado o nome da fonte, tamanho da fonte, espaçamento entre as letras e cor da fonte, além de permitir fazer testes e manipular palavras usando as mesmas características. 
## Referências Bibliográficas
 https://www.w3bai.com/pt/css/css3_fonts.html
 https://www.youtube.com/watch?v=FLuQonci9wU&list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s&index=14
 https://www.youtube.com/watch?v=XTtfM0L7Co0&list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s&index=16
