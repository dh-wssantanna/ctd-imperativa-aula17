/*
    Atividade I: Inicialize um projeto npm;
    ( x ) Preencha nome do projeto;
    ( x ) Preencha o nome de todos os integrantes do grupo;
    ( x ) Preencha a licença como UNLICENSED;
    ( x ) Preencha a versão como 1.0.

    Atividade II: Instale o Nodemon globalmente em sua máquina. Link com a instrução de instalação: https://www.npmjs.com/package/nodemon.
    
    Atividade III: Ignore a pasta node_modules
    ( x ) Configure o git, utilizando o arquivo .gitignore, para que ele ignore as alterações realizas na pasta node_modules.

    Atividade IV: Crie o projeto 
    ( x ) Instale o Express no projeto (https://expressjs.com/pt-br/),
    ( x ) Implemente a aplicação como as seguintes rotas:
        ( x ) Rota http://localhost:1234/
            ( x ) Insira o texto: Seja bem-vindo ao [nome_do_projeto].
        ( x ) Rota http://localhost:1234/sobre/
            ( x ) Insire o texto: Sobre o projeto
*/

const express = require('express');

const app = new express();

app.get('/', function(req, res) {
    res.send('Seja bem-vindo a mesa-de-trabalho-17')
});

app.get('/sobre', function(req, res) {
    res.send('A mesa de trabalho 17 nós apreseta a novas ferramentas que vão nos permitir criar um servidor de forma local');
});

app.listen(1234);