# Links
## Como usar os parâmetros dos links internos e externos em HTML<br>
Eles funcionam basicamente da mesma maneira, que é: `<a href="" target="" rel="" download="" type="">texto clicável</a>`<br>
  ### Targets:
  Os targets especificam aonde o link deverá ser aberto. Exemplos dos dois mais usados:<br>
  `_self` (padrão) -> Redireciona-te para a página do link, mas na mesma aba que o programa estava sendo rodada.\
  `_blank` -> Redireciona-te a uma  nova aba.<br>\
  Usamos o _self para links internos e o _blank para links externos. Isso pois uma página tende a ter muitos links internos e mandar o programa abri-lo em outras páginas causaria   uma bagunça desconfortável para o usuário.<br>\
  Já os links externos são abertos em outras páginas devido a sua baixa quantidade e assim o usuário não se esquece da sua página e começa a navegar somente na externa.<br>
***
 ### Rel:
 O rel se refere ao relacionamento do link com o código. Além de ajudar no entendmento do HTML, também facilita os mecanismos de busca do navegador.<br>\
 Exemplos de alguns Rels:
\
\
    "nofollow" -> É para quando não há um alvará para a página referenciada ou não se tem 100% de certeza que seja uma página de conteúdo original;\
 \
   "dofollow" -> É usado como o oposto do nofollow, dizendo para o google que essa é uma página de conteúdo original. Geralmente, empresas patrocinadoras pedem programas com o rel assim;\
    \
   "external" -> Usado para referenciar um link externo;\
    \
   "next" -> Referencia um link de partida para outra página;\
    \
   "prev" -> Vem da palavra "previous" e é usado para referenciar um link de volta para uma página mãe.
   ***
   ### Download:
   O parâmetro download transforma um link usual em um link que, ao ser clicado pelo usuário, começa a baixar o mesmo arquivo dentro da máquina.
   #### PS: No parâmetro "download", somente o nome do arquivo deve ser colocado, e não o seu caminho, como no caso das imagens.
   \
   Alguns navegadores não permitem baixar o arquivo do link com o parâmetro download. O parâmetro type talvez resolva esse problema.
   ***
   ### Type:
   O parâmetro type especifica o tipo do arquivo da âncora/link. O PDF, por exemplo, fica como "application/pdf" dentro de type.\
   Isso pode variar dependendo do tipo de arquivo. Para saber qual é o type do seu arquivo, basta acessar:
   https://www.iana.org/assignments/media-types/media-types.xhtml