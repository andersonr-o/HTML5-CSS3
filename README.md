## Link:

[Site com Inputs de Data](https://andersonr-o.github.io/Html-Css/Inputs-de-Data/form003.html)

# Quatro Inputs de Formulários

Nesse artigo veremos mais quatro inputs que usamos em [formulários](https://github.com/andersonr-o/HTML5-CSS3/tree/Formul%C3%A1rios): o number, o month, o date e o time.

## Number

O input de tipo number cria uma caixa que não aceita texto, somente números.

### Min e Max

Temos os parâmetros ``min=""`` ``max=""`` que referem-se ao valor mínimo e máximo que será colocado na caixa.

Então se o nosso min for igual a 2, o número 1, 0, -1, etc. não serão aceitos no nosso input.

### Step

Também há o step, que é o valor que será pulado na seta da caixa. Por exemplo, se o nosso step for igual a 0.5 e na caixa estiver o valor 5, ao clicarmos na seta para cima, aparecerá o valor 5.5.

Veja no vídeo abaixo como funcionaria:

https://user-images.githubusercontent.com/97858145/185673497-b5ba9e3c-42b4-46fc-98bc-7152b7e044ba.webm

## Month

O input do tipo month cria um calendário com mês e ano no formulário.

### Value

Podemos usar o ``value=""`` em inputs do tipo number, month, date e time, mas eles anularão qualquer placeholder que esteja em execução.

Basicamente, o value fará com que um valor já fique registrado dentro da caixa ao carregá-la.

Então, se usarmos ``value="2022-08"``, ao carregar a página, o mês 08 do ano de 2022 já estará pré selecionado.

## Date

É a mesma coisa que o input de tipo month, mas nesse haverá também o dia no calendário, e não somente o mês e o ano.

Ficaria assim:

![Captura de tela de 2022-08-19 14-30-42](https://user-images.githubusercontent.com/97858145/185675107-cac60ede-bcfe-4ca5-a18c-538fdc171354.png)

## Time

o input de tipo time cria um relógio onde o usuário pode inserir o horário que preferir. Veja:

![Captura de tela de 2022-08-19 14-32-46](https://user-images.githubusercontent.com/97858145/185675452-d3c967ca-ea4f-470e-89ac-5fa1a3492087.png)
