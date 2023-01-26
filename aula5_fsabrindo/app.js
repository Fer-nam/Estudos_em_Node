const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');
const escreve = require('./modulos/escrevendo');
const ler = require('./modulos/ler');

// const pessoas = [
//     {nome:'João'},
//     {nome:'Maria'},
//     {nome:'Eduardo'},
//     {nome:'Luiza'}
// ];

// //função para converter o objetos para json
// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val =>console.log(val))

    }



leArquivo(caminhoArquivo);

