## Link:

[Site com Media Feature](https://andersonr-o.github.io/Html-Css/Media-Features/index.html)

# Media Features

O que vimos no artigo passado, o [Media Query](https://github.com/andersonr-o/HTML5-CSS3/tree/Media-Query), se trata dos media types, ou seja, tipos de mídia.

Mas quando colocamos `media="screen"` é muito relativo, pois há diversos tamanhos de tela em diversos dispositivos diferentes.

Por isso existem os media features, ou características de mídia.

Media query é media type + media feature.

Quando mudamos o tamanho da tela mudando a orientação do nosso dispositivo de em pé para deitado, essa diferença não pode quebrar o nosso site.

## Usando Media Feature

Medias features são indicados por parênteses dentro do atributo `media=""`, por exemplo:

`<link rel="stylesheet" href="estilos/retrato.css" media="screen and (orientation:portrait)">`

Para cada media feature devemos usar um parêntese diferente.

Depois basta estilizar da maneira como preferirmos na CSS.

*Mude a orientação do seu dispositivo e teste. Se estiver em um computador, diminua o tamanho do site na tela.*

As imagens utilizadas foram coletadas no [repositório](https://github.com/gustavoguanabara/html-css/tree/master/exercicios/modulo-04/ex026) do professor Guanabara.
