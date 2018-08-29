const express = require('express');

const fs = require('fs');
const alugt = require('./node_modules/data/alugel.json');

const app = express();
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
// app.use(bodyParser.urlencoded());

app.get('', (req, res) => {
    res.render('index');
});

app.post('', (req, res) => {
    let string = `Nome: ${req.body.nome} \nEmail: ${req.body.email} \nMensagem: ${req.body.mensagem} \n`;

    fs.writeFile('mensagem.txt', string, {flag: 'a'}, (err) => {
        res.render('obrigado');
    });
});

app.get('/alugel', (req, res) => {
    res.render('alugel', {'alugel': alugel});
});

app.get('/informacoes', (req, res) => {
    res.render('informaçoes');
});

app.listen(3000, () => {
    console.log('Servidor inicializado')
});