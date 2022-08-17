## Link:

[Site com formulário e label](https://andersonr-o.github.io/Html-Css/Formul%C3%A1rios/form001.html)

# Label

Se criarmos um formulário assim:

![label-example](https://user-images.githubusercontent.com/97858145/185222257-34c5925c-f040-4b2c-b160-770345f541d2.png)

Visualmente ele estará normal, mas não há nenhuma relação do texto "nome" com a caixa de texto logo a sua frente.

Isso é importante para os mecanismos de pesquisa do browser. O label cria essa relação.

**Sua sintaxe:**

``<label for="id do input">Nome:</label>``

O argumento ``for=""`` do label tem que ser igual ao id do input da caixa de texto. Por exemplo:

``<label for="nome">Nome: </label><input type="text" name="xyz" id="nome"``

Os dois estão iguais ``for="nome"`` e ``id="nome"``, então haverá relação entre eles.

O label também faz com que, ao clicarmos no texto, a caixa já fica selecionada esperando o usuário digitar alguma coisa.
