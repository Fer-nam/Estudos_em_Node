//Formas de importar 
//const mod1 = require('./mod');
//const falaNome = mod1.falaNome;
const path = require ('path');
const axios = require('axios');
const {Pessoa} = require('./mod');
const mod1 = require('./mod');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e=>console.log(e))
const p1 = new Pessoa('luiz');
console.log(p1);
console.log(p1);


//const {nome, sobrenome, falaNome} = require ('./mod');

