## Link para Acesso ao Site:

[Site com iframe padrão](https://andersonr-o.github.io/Html-Css/Configurando%20iFrames/iFrame002.html)

# Configurando iframes

Alguns navegadores de dispositivos mobile podem não ter suporte a iframes, por isso colocamos uma âncora no meio do iframe, assim se o iframe não aparecer , temos a âncora para direcionar o usuário para o site desejado.

Ficaria algo parecido com isso: 

``<iframe src="https://www.cursoemvideo.com/" frameborder="0">``
``<a href="https://www.cursoemvideo.com/"></a>``
``</iframe>``

Alguns programadores preferem colocar um aviso de que o iframe não está disponível para aquele dispositivo.

O tamanho padrão do iframe é 300px de altura e 150px de largura, mas podemos alterá-lo na CSS normalmente.

## Scrooling

O scrooling se refere a barra de rolagem em si.

``scrooling: auto;`` &rightarrow; A barra de rolagem será criada se  conteúdo for maior que 100vh

``scrooling: yes;`` &rightarrow; A barra de rolagem existirá independentemente das circunstâncias.

``scrooling: no;`` &rightarrow; A barra de rolagem não existirá. (Alguns navegadores a criam mesmo assim, se houver necessidade.)

## Frameborder

Frameborder = 0 &rightarrow; Não existe borda no iframe;

Frameborder = qulquer outro número &rightarrow; borda de 1px.

Porém podemos usar "Frameborder = 0" e alterar a borda como quisermos na CSS, pois a configuração da CSS é a que prevalece.
