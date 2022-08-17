## Link:

[Site do formulário demonstrativo](https://andersonr-o.github.io/Html-Css/Formul%C3%A1rios/form001.html)

# Formulários

Para criarmos formulários com HTML, usamos a tag &lt;form&gt;

A tag &lt;form&gt; possui alguns parâmetros, como o ```autocomplete="on/off"```, que serve para deixarmos habilitada ou não a função de sugestão de texto. Por padrão ele é "on". (igual quando digitamos metade de uma palavra e aparece ela inteira embaixo para clicarmos e escrever ela sem digitar.)

Outro parâmetro é o ```action=""```. O action se refere para onde os nossos dados irão depois de enviarmos. Podemos fazer um script em alguma linguagem backend para tratarmos esses dados.

## Inputs

Uma parte muito importante dos formulários é o input. Basicamente, o input cria uma caixa de texto de senha, email, nome, número, botão de enviar, etc.

Na imagem abaixo, por exemplo, usamos três inputs: dois para caixas de texto (type="text") e um para o botão de enviar (type="submit").

![Captura de tela de 2022-08-17 15-40-38](https://user-images.githubusercontent.com/97858145/185217788-3d092362-487f-453a-ac93-317e8ae2800b.png)

 A sintaxe de um input depende do seu tipo. O do tipo texto é assim:

 ``<input type="text" name="x" id="x">``<br>

 O name e o id serve para fazer referência a outras linguagens na DOM. Name em PHP e id em JavaScript, por exemplo.

 Já a sintaxe do input de tipo botão de enviar é assim:

 ``<input type="submit" value="Enviar">``<br>

 Só usamos o value em casos assim, pois não há dados a serem tratados, mas só há um botão que possuí uma única funcionalidade. O value não especifica a sua função, mas sim o que terá escrito dentro do botão.

