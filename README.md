## Link:

[Site com checkbox e radio]()

# Inputs Checkbox e Radio

## Checkbox

O input de tipo checkbox cria um quadrado que pode ser selecionado através de um clique. Na frente do input usamos um label para relacionar o quadrado com uma palavra, ficando assim:

![checkbox-example](https://user-images.githubusercontent.com/97858145/185682026-2397aa18-f8aa-4a9e-88ec-50766350de32.png)

### Atributo checked

O atributo checked faz com que uma opção já esteja marcada quando a página for carregada.

Se eu sei que a maioria das pessoas vai escolher futebol, eu deixo futebol checked, e assim ele já estará marcado, facilitando o trabalho do usuário.

## Radio

O de tipo radio cria uma bolinha em vez de um quadrado, mas ele só permite que uma opção seja marcada entre todas as opções.

Para isso, elas **terão de ter o "name" igual**. Caso o contrário, todas as bolinhas poderão ser marcadas uma vez e depois não poderão ser desmarcadas mais.

O input do radio é assim visualmente:

![radio-example](https://user-images.githubusercontent.com/97858145/185682768-700341be-00ef-4dd0-b05c-a6a7cbd62139.png)

### Preocupando-se com o backend

É importante colocar um value no input de tipo radio, pois os dados são enviados como on e off para o backend eventualmente.

Ao colocarmos ``value="M"`` para o radio de sexo masculino e ``value="F"`` para o radio de sexo feminino, eliminamos esse problema, pois é isso que será recebido no backend.
