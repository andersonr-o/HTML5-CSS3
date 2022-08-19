## Link:

[Site do formulário](https://andersonr-o.github.io/Html-Css/Formul%C3%A1rios/form001.html)

# Métodos de Envio de Formulários

Há dois métodos para que os dados dos formulários sejam enviados à outro lugar: o GET e o POST.

Por padrão, o HTML deixa o método GET em execução.

Se quisermos mudar isso, a tag &lt;form&gt; tem o parâmetro ``method=""``, aonde isso é definido.

## Melhor usar GET ou POST?

No método GET , as informações aparecem na URL depois de enviadas, como na imagem abaixo:

![get-form](https://user-images.githubusercontent.com/97858145/185234646-0e5401b9-1322-4aab-a2e7-08b08f480913.png)

Já no método POST isso não acontece, mas ainda aparece no inspecionar, ou seja, nenhum é garantia de segurança. Para isso, teríamos que usar o protocolo HTTPS.

**  Quando usar um ou  o outro então?**

Basicamente, quando as informações não forem de natureza sensível (endereços, senhas, etc.), podemos usar o GET.

O GET permite compartilhamento de URL com tamanho de até 3000 bytes, o que é aproximadamente 3000 caracteres.

Se formos tratar dados de natureza sensível ou imagens (pois possuem tamanhos mais elevados), usamos o POST.

Não há nenhuma diferença de velocidade perceptível entre os dois métodos atualmente, então usar o GET ou o POST depende do desenvolvedor e da natureza dos dados.


