## Link para Acesso ao Site:

[Site com iframe de cadastro](https://andersonr-o.github.io/Html-Css/Iframes%20Mais%20Seguros/iframe005.html)
[Site com iframe de script](https://andersonr-o.github.io/Html-Css/Iframes%20Mais%20Seguros/iframe006.html)

# Iframes mais Seguros

Depois de vermos os [problemas dos iframes](https://github.com/andersonr-o/HTML5-CSS3/tree/Inconvenientes-dos-iframes), é bom dar uma amenizada  e apresentar uma opção para criarmos iframes mais seguros.

Trago dois conceitos aqui: o sandbox e o referrepolicy.

## Sandbox

O sandbox por padrão corta o acesso que o site do iframe teria ao nosso para fazer o cadastro do usuário nesse caso do primeiro site anexado. Mas eu deixei permitido para exemplificar (olhem o "iframe005.html").

O sandbox é a proteção máxima, mas há outras opções:

Usar o allow-forms nos permitirá fazer os formulários. allow-same-origin que permite arquivos de mesma origem, e há também o allow-scripts.

Isso faz com que o iframe fique mais seguro. É função do desenvolvedor definir o parâmetro do sandbox.

## Referrerpolicy

Se usarmos ``referrerpolicy="no-referrer"``, o site do iframe não coleta informações do nosso site (igual aos que os sites coletam para fazer anúncios).

Se não usarmos, estamos permitindo que façam isso.

Cuidado ao permitir que se rode scritps de terceiros no iframe do seu site (só faça isso se for de muita confiança ou seu próprio)

Se for o caso use sandbox e referrerpolicy.
