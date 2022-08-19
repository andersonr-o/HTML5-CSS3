## Link:

[Site com os três tipos de inputs]()

# Color, File e Range

## Color

O input do tipo color é um seletor de cores RGB para o usuário. ELe poderá escolher entre as milhões de possibilidades de corescom esse input.

A cor padrão é preto (#000000), mas isso pode ser mudado com o atributo ``value=""``.

Os dados enviados para o backend com esse input é a cerquilha e o código RGB.

## Range

O input de tipo range é basicamente uma régua que contém uma bolinha que pode ser arrastada para frente ou para trás.

Por padrão, os dados enviados para o backend no input de tipo range é de 0 a 100 dependendo de onde o usuário posicionou a bolinha na régua. Mas esse valor pode ser alterado com os atributos ``min`` e ``max``

## File

O input de tipo file permite que um arquivo, como uma imagem por exemplo, seja escolhida pelo usuário a partir de seu dispositivo.

**Quando usamos esse input, precisamos usar o [método POST de envio de dados](https://github.com/andersonr-o/HTML5-CSS3/tree/M%C3%A9todos-de-Envio-de-Dados), pois o GET não funciona em arquivos com mais de 3000 bytes, e uma foto e outros elementos do formulário podem facilmente ultrapassar esse valor.**
