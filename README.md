## Link:

[Site com Agrupamento de Inputs](https://andersonr-o.github.io/Html-Css/Agrupamento-de-Campos-e-Inputs/form005.html)

# Agrupamento de Campos e Inputs

## Inputs de Telefone e E-mail

O input de tipo email e telefone são bons, mas **possuem algumas falhas**. O input de email só verifica se há um arroba (@) no texto digitado. Se houver ele é considerado um email.

A mesma coisa ocorre com o input de tipo tel (telefone).

Para corrigir esse problema, teríamos que usar exprssões regulares, ou RegEx. O RegEx basicamente define um padrão para que o texto digitado pelo usuário seja aceito. Por exemplo:

![RegEx-example-better](https://user-images.githubusercontent.com/97858145/185679351-1134fadb-a500-4af9-9084-b1ae2239ca5d.png)

Mas esse assunto é um pouco mais complicado e foge do tema do artigo, pesquisem à parte.

## Agrupamento de Campos

Podemos envelopar as caixas do nosso formulário com a tag &lt;fieldset&gt; que significa grupo de campos.

Ela criará um quadrado em volta das caixas.

Também há a tag &lt;legend&gt; quando usamos a &lt;fieldset&gt;, que cria um cabeçalho no fieldset.

O resultado final sem CSS seria esse:

![Captura de tela de 2022-08-19 15-03-43](https://user-images.githubusercontent.com/97858145/185680137-4645c470-291f-454b-acf5-ee7abb941548.png)

Há dois grupos de campos e dois cabeçalhos de grupo de campo.
