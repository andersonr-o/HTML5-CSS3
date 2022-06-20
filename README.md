## Links para acesso aos sites:
[Site](https://andersonr-o.github.io/Html-Css/modelos-de-box/box.html) exemplo de manipulação de box com CSS;<br>
Outro [Site](https://andersonr-o.github.io/Html-Css/modelos-de-box/box02.html) de manipulação de box, mas dessa vez manipulando as grouping tags (header, main, footer, etc.).

# Entendendo a anatomia das caixas
 As caixas em HTML são os espaços que os textos são inseridos.<br>
 Elas são divididas por camadas, então imagine:<br>
 * Uma palavra em HTML está cercada por **altura (height)** e **largura (width)**. Essa é a primeira camada;
 * Altura e largura estão formando uma **borda (border)**. Essa é a segunda;
 * O espaçamento da borda para dentro se chama **padding**. Essa é a terceira camada;
 * O **margin** é como se fosse o padding externo; fica da borda para fora. É a última camada e se refere ao espaço externo à caixa de texto. Por exemplo: se criamos duas box de texto, elas ficarão grudadas uma na outra. O margin espaça elas.<br><br>

 Mas se quisermos algo entre a borda e o margin, isso se chama outline e sempre fica fora da borda e dentro da margin. É útil para quando queremos criar um tracejado em volta do tracejado da borda.<br><br>
 Ficou confuso? Na última seção, em "Verificando a anatomia das caixas:", ficará mais claro de como visualizar melhor o que foi descrito acima.<br><br>
 Veja também uma imagem que ilustra tudo o que foi dito acima e é uma representação da sequenciação descrita abaixo da imagem:<br><br>
 ![box-picture](https://user-images.githubusercontent.com/97858145/161633585-43142cbf-d70b-4ebb-8147-cf38a9d20214.png)<br><br>
 
 **O outline não aparece na caixa do inspecionar.**<br><br>

 **Sequenciação:**<br><br>

 Texto dentro da caixa < Height and Width < Padding < Border < Outline < Margin.
 
 ## Na CSS:

  ### Height e Width

   ```height: Xpx;```<br>
   ```width: Xpx;```

  ### Border

   ```border-width: 10px;```<br>
   ```border-color: lightgoldenrodyellow;```<br>
   ```border-style: inset;```<br><br>

   **Shorthand de border:**<br><br>

   Tem de estar nessa ordem:<br><br>

   ```border: width style color;```

  ### Padding

   ```padding-top: 10px;```<br>
   ```padding-right: 10px;```<br>
   ```padding-bottom: 10px;```<br>
   ```padding-left: 10px;```<br><br>

   **Shorthand de padding:**<br><br>
   Tem de estar nessa ordem: padding-top &rightarrow; padding-right &rightarrow; padding-bottom &rightarrow; padding-left<br><br>
   <strong>Se o padding for de medidas iguais para todos os lados, padding: 10px 10px 10px 10px; basta usar o "padding: 10px;"</strong><br><br>

   ```padding: 10px;```

  ### Margin

   ```margin-top: 20px;```<br>
   ```margin-right: 20px;```<br>
   ```margin-bottom: 40px;```<br>
   ```margin-left: 20px;```<br><br>

   **Para centralizar caixas:**<br><br>
   ```margin: auto;```<br><br>

   **Shorthand de margin:**<br><br>
   Ordem necessária: Igual ao padding, o magin também gira no sentido horário:<br>
   margin-top &rightarrow; margin-right &rightarrow; margin-bottom &rightarrow; margin-left.<br><br>
   Seguindo o exemplo acima:<br><br>

   ```margin: 20px 20px 40px 20px;```<br><br>

   **Para centralizarmos a box com shorthand margin:**<br><br>
   margin: Xpx auto Xpx auto;

  ### Outline

   ```outline-width: 5px;```<br>
   ```outline-style: dashed;```<br>
   ```outline-color: salmon;```<br><br>

   **Shorthand de outline:**<br><br>
   Ordem necessária: Igual ao border, o shorthand outline deve estar nessa ordem:<br>
   ```outline: width style color;```<br><br>

   Exemplo com base no outline acima:<br><br>

   ```outline: 5px dashed salmon;```
   
   ### Sombra nas caixas
   É representado, na CSS, por ```box-shadow: Xpx Xpx Xpx Xpx color;```<br><br>
   Ele cria uma sombra em volta do corpo da caixa, geralmente na parte de fora, mas também conseguimos fazer isso na parte de dentro. O código ficaria assim: ```box-shadow: inset Xpx Xpx Xpx Xpx color;```<br><br>
   Geralmente, é aconselhável que se use a cor black, pois sombra é a ausência de luz, e nada melhor que a cor preta para isso.<br>
   Aí só ajustamos o alpha do preto para não deixar a sombra tão forte e ela ficará bonita.
   #### Significado da sua composição
   A configuração básica envolve somente três medidas e uma cor: ```box-shadow: Xpx Xpx Xpx color;```<br><br>
   Aonde a primeira se refere ao deslocamento horizontal da sombra;<br>
   A segunda ao deslocamento vertical;<br>
   A terceira é sobre o seu espalhamento (quanto mais espalhado, mais desfocada a sombra);<br>
   E a última, que vimos no código acima, refere-se à extensão (qunto maior a extensão, o quadrado da sombra ficará maior em todos os lados sem perder o foco).<br><br>
   **Sequenciação:**<br><br>
    (inset) Eixo X > Eixo Y > Disparamento > (Extensão) > Color.
   #### Dentro do Devtools
   Dentro da ferramenta de inspecionar, conseguimos testar uma box-shadow independente e depois copiar o seu código e colar no nosso editor.<br><br>
   Veja a imagem abaixo para entender melhor:<br><br>
   Escolha a tag que recebeu a box-shadow na CSS e clique no quadrado cercado por uma edição de cor azul da imagem para aparecer o painel de teste.<br>
   ![box-shadow-devtools-copy](https://user-images.githubusercontent.com/97858145/161830051-dda92107-bc93-4e53-bfec-e47bf1ef4dc7.png)

  ### Border-radius
  Ou raio da borda. Refere-se à curvatura que há nas têmporas de uma box. Sendo assim, alterá-las é deixar um retângulo com bordas e não com pontas.<br><br>
  Por exemplo:<br><br>
  ```border-radius: 10px;```<br><br>
  O border-radius acima é a mesma coisa que:<br>
  ```border-top-left-radius: 10px;```<br>
  ```border-top-right-radius: 10px;```<br>
  ```border-bottom-right-radius: 10px;```<br>
  ```border-bottom-left-radius: 10px;```<br><br>
  Cada um destes acima se refere a uma extremidade da box, como os seus próprios nomes dizem. É um shorthand, praticamente.<br>
  Se quiséssemos, poderíamos alterá-las individualmente:<br>
  ```border-radius: 10px 20px 30px 40px;```<br><br>
  Para criar um efeito diagonal:<br>
  ```border-radius: 20px 0px;```
  Assim, uma diagonal (nesse caso seria a top left e a bottom rigth, pois gira no sentido horário) terá bordas e a outra ficará pontiaguda, deixando um efeito bonito.<br><br>
  Para criar uma bola com border-radius basta usar:<br>
  ```border-radius: 50%;```

 ## Tipos de box:
  Todas as caixas possuem a sequenciação descrita acima, mas elas ainda se dividem em duas.
  ### Box-level
   São as tags que ocupam uma linha inteira, de ponta a ponta, dentro da box do código HTML.<br><br>
   As mais populares são: &lt;div&gt;, &lt;h1-h6&gt;, &lt;p&gt;, &lt;main&gt;, &lt;header&gt;, &lt;nav&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt;, &lt;form&gt; e &lt;video&gt;
  ### Inline-level
   São as tags que ocupam somente o espaço necessário dentro da box do código HTML.<br><br>
   Por isso usamos span para customizar uma palavra ou frase dentro de um parágrafo, por exemplo. Enquanto uma é box-level, a outra é inline-level.<br><br>
   Um button não ocupa toda a linha, assim como o label, portanto é possível que na mesma linha haja texto, box e mais texto. Em uma box-level isso não é possível. Aí está a diferença dos dois tipos de box.<br><br>
   As mais populares são: &lt;span&gt;, &lt;a&gt;, &lt;code&gt;, &lt;label&gt;, &lt;button&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;small&gt;, &lt;sup&gt;, &lt;sub&gt; e &lt;input&gt;

# Verificando a anatomia das caixas:
 Com o nosso código aberto dentro do navegador, iremos abrir o inspecionar e clicar na tag que queremos destrinchar.<br>
 Ser-nos-á mostrado todas as configurações de CSS daquela tag.<br><br>
 Ainda no inspecionar, conseguimos alterar a CSS e ver em tempo real as alterações que estão sendo feitas, e nada disso alterará o código principal, basta dar um F5 para retornar às configurações primárias.<br><br>
 Vejamos melhor o que nos é mostrado através do vídeo abaixo:
 

https://user-images.githubusercontent.com/97858145/161633909-0af1d506-92e6-4eb9-b306-1cf9f9cd9790.mp4


 **É importante ressaltar que o outline não aparece na caixa do inspecionar.**
