# Dentro da CSS
 ## Famílias das Fontes
Trata-se de um conjunto de fontes e usadas na CSS.<br>
Dentro do programa, ela é representada da seguinte maneira: ```font-family: x, ‘y y’,  z```. Se o nome da fonte é composto por duas palavras, usamos ele entre aspas.

## Compatibilidade das Fontes
Em computadores, celulares e tablets geralmente a maioria das fontes são compatíveis, mas em TVs, por exemplo, pode não ter Arial ou Helvética ou Verdana, e vice-versa com todas as fontes.<br><br>
### Safe Font Combination
Geralmente, as font-family ficam em um grupo de três. Isso serve para que, caso a fonte colocada em primeiro lugar não funcione, a segunda é testada, e assim por diante.<br>
Isso é chamado de safe font combination.<br><br>
Ao digitar “css web safe combinations” e acessarmos o site da w3schools, veremos todos os tipos de safe combinations disponíveis.<br><br>
*Alguns deles pode não estar disponível no seu editor de código.*
*O ideal é sempre terminar a font-family com uma categoria de fontes, pois rodará, em última instância, em todos os dispositivos.*

## Tamanho de Fontes e suas Medidas
São divididas em dois tipos: as medidas absolutas e as medidas relativas.
### Medidas Absolutas
São elas: cm, mm, in (polegada), px, pt (ponto) e pc (paica).<br><br>
Pontos e paicas são usadas mais em papel, por estarem relacionadas com tipografia. Tanto é que o ponto é a medida da fonte em aplicativos como Word, PowerPoint, etc.
### Medidas Relativas
São elas:
* em: é realtivo ao tamanho M atual da fonte. Geralmente, 1 em corresponde a 16 px, e ambos representam o tamanho padrão;
* ex: refere-se ao tamanho x da fonte, isto é, ao tamanho da altura x;
* rem: é igual ao em, mas o rem é relativo ao body;
* vw: significa view width e é a largura da viewport — que é o tamanho da tela. É medido em porcentagem;
* vh: é a altura da viewport (medida em porcentagem também).<br><br>
Há outras, mas, entre todas, a em é a principal. Isso porque trabalha com a porcentagem do tamanho das fontes. Algumas telas têms pixels duplicados ou cada pixel é a junção de outros quatro pixels, etc. Sendo assim, as medidas em pixels podem sofrer distorções, já o em não.<br><br>
Isso porque a W3C estabelece padrões para a criação e interpretação de conteúdos na web. Esse órgão recomenda o px como medida absoluta e o em como medida relativa para font-size.

## Peso
Usa-se o ```font-weight: x;```.<br><br>
Valor de peso:<br><br>
Lighter, normal, bold, bolder ou valor que vai de 100-900.<br><br>
Esse valor de 100 a 900 existe porque algumas fontes não têm variações de peso. Por exemplo: Arial, Times New Roman e Verdana. Sendo assim, a variação de 100 a 900 suprem essa carência.<br><br>

## Estilo
Há dois: itálico e normal. Na CSS, são respresentados por ```font-style: x;```.<br><br>
* Sublinhado
Usa-se o ```text decoration: underline;```<br><br>
O normal nem precisa ser dito.<br><br>
**Se for usar font-weight, font-style e text-decoration tudo junto, prestar atenção se a família da fonte as suporta.**

## Shorthand Font
Condensa as quatro fonts (style, weight, size e family).<br>
Para funcionar usamos ela assim: ```font: x, x, x, x;```
Para o shorthand funcionar, devemos seguir essa mesma ordem da linha de cima:<br>
font style &rightarrow; font-weight &rightarrow; font-size &rightarrow; font-family.<br><br>
Por exemplo: <br><br>
```font: italic bolder 3em 'work sans'```
