# Link para acesso ao site:

Neste caso, o site é o igual ao README, pois só contém HTML. Apesar disso, o link de acesso se encontra aqui:<br>[Site HTML](https://andersonr-o.github.io/Html-Css/Listas/Listas.html)

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="icone-Html.ico" type="image/x-icon"> <!--Essa linha serve para adicionar um ícone do lado do título do site, lá na aba-->
    <link rel="shortcut icon" href="icone-Html.ico" type="image/x-icon">
</head>
<body>
    <h1>Trabalhando com listas em HTML</h1>
    <p>OBS: Há, nos comentários do código, a explicação dos tipos de listas, das suas finalidades e das suas ordenações.
    <h2>Listas ordenadas:</h2> <!--São aquelas em que a ordem importa dentro da sequência-->
    <ol type="i" start="1"> <!--Tipos de ordenação nas listas: 1, A, a, I, i-->
        <li>Acordar</li>
        <li>Tomar café</li>
        <li>Escovar os dentes</li>
        <li>Estudar</li>
    </ol>
    <h2>Listas não Ordenadas</h2>
    <ul type="square"> <!--disc (bolinha preta), circle (bolinha vazia) ou square (quadrado preto)-->
        <li>Comprar Pão</li>
        <li>Comprar Tomate</li>
        <li>Comprar Leite</li>
    </ul>
    <h2>Minhas linguagens favoritas</h2>
    <ol> <!--Exemplo de lista aninhada (2 vertentes)-->
        <li>Antigas</li>
    <ol type="a" start="5"> <!--Start: Indica qual número será o primeira da lista. Se for letra, será o seu correspondente alfabético)-->
            <li>Clipper</li>
            <li>Visual Basic</li>
            <li>Fortran</li>
            <li>Delphi</li>
        </ol>
        <li>Novas</li>
        <ol type="a">
            <li>JavaScript</li>
            <li>Python</li>
        </ol>
    </ol>
    <h2>Meus jogos favoritos</h2>
<ul>
        <li>Console</li>
     <ol type="a">
        <li>Naruto</li>
        <ol type="i">
            <li>Naruto Shippuden Ultimate Ninja 5</li>
            <li>Naruto Shippuden Ultimate Ninja Storm 3</li>
        </ol type="a">
        <li>GTA</li>
        <ol type="A">
            <li>GTA San Andreas</li>
            <li>GTA V</li>
        </ol>
    </ol>
    <li>Mobile</li>
    <ol type="a">
        <li>Clash</li>
        <ol type="I">
            <li>Clash Royale</li>
            <li>Clash of Clans</li>
        </ol>
    </ol>
</ul>
    <h2>Listas de definição</h2>
        <dl> <!--As listas de definição servem para categorizar as sequências em termos (<dt>) ou descrições (<dd>)-->
        <dt>Supercompensação</dt>
        <dd>Técnica utilizada por atletas para atingirem o ápice de suas performances antes das competições</dd>
        <dt>Degraus (curiosidade)</dt>
        <dd>Se os degraus fossem 2mm maiores, a maioria das pessoas cairiam. Esta técnica foi utilizada por chineses para derrubarem seus inimigos nas guerras antigas</dd>
        <dt>A resposta de tudo</dt>
        <dd>Como muitos pensam errado, a resposta de tudo não está na sequência de fibonacci, e sim no número 42</dd>
    </dl>
</body>
</html>
