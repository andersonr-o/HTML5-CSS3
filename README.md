# Mídias Dinâmicas
 Uso de imagens dinâmicas, áudios, vídeos e outros arquivos dentro do seu site
## Na CSS
 Para usar imagens dinâmicas, usamos o seguinte código:<br>
 ```<picture>```<br>
        ```<source media="(max-width: 450px)" srcset="imagem-substituta1.jpeg" type="image/jpeg">```<br>
        ```<source media="(max-width: 850px)" srcset="imagem-substituta2.png" type="image/png">```<br>
        ```<img src="imagem-principal.jpeg" alt="imagem original">```<br>
    ```</picture>```<br><br>
  O que aconteceu no código acima foi uma análise da tela do usuário e com base nisso alguma imagem será mostrada.<br>
  Se a tela do usuário tiver 450px ou menos, a imagem-substituta1 rodará.<br>
  Se a tela do usuário tiver entre 451px e 850px, a imagem-substituta2 rodará.<br>
  Se a tela do usuário tiver mais que 850px, a imagem-principal rodará.
  ## Considerações Importantes
  No código acima, usamos o max width, mas, por padrão, usa-se o min-width.<br>
  Se usarmos o max-width, as imagens devem estar em ordem crescente no tamanho dos pixels (pequena &rigtharrow; média &rigtharrow; grande).<br>
  Se usarmos o min-width, elas devem estar em ordem descrescente (grande &rigtharrow; média &rigtharrow; pequena).<br><br>
  Mas isso não quer dizer que deva ter três imagens como opção. Pode haver menos ou mais.
  ### Peguemos o exemplo acima com o min-width:
  ```<picture>```<br>
        ```<source media="(min-width: 850px)" srcset="imagem-principal.jpeg" type="image/jpeg">```<br>
        ```<source media="(min-width: 450px)" srcset="imagem-substituta2.png" type="image/png">```<br>
        ```<img src="imagem-substituta1.jpeg" alt="imagem trocada">```<br>
    ```</picture>```<br><br>
    O resultado final será o mesmo nesse caso, mas a ordem mudou.<br><br>
    **Sempre que usamos max-width ou min-width, colocamos uma margem de 50px para mais no tamanho. Isso porque devemos considerar a largura da barra de rolagem também.**
   ## Como testar isso em um único dispositivo.
   Se estiver usando um laptop com Windows e Chrome, abra o "Alternar abas de ferramenta do dispositivo" dentro de inspecionar, ou use o atalho de teclado F12 + Ctrl + Shift + M. Lá terá a opção de selecionar alguns celulares e de ajustar a largura de visualização manualmente.<br><br>
   Vídeo exemplo do que acontece dentro do inspecionar:<br>
https://user-images.githubusercontent.com/97858145/161346185-c9d8cd06-1755-4e1d-a028-87b71ece3a23.mp4

   Outra forma mais simples é deixar o navegador em picture in picture e ir aumentando e diminuindo o seu lado, assim as imagens serão atualizadas conforme essa variação.<br>
