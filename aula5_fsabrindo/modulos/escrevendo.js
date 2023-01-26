const fs = require('fs').promises;



//fs.writefile escreve arquivo
// (caminho do arquivo, conteudo do arquivo
//  flag: w(elimina os dados do arquivo caso ja exista e escreve  o conteudo, ))

//flags: w elimina os dados do arquivo 
//caso ja exista e escreve  o conteudo passado
//flags: a concatena com o conteudo existente


module.exports = (caminho,dados) =>{
    fs.writeFile(caminho, dados, {flag:'w'});
};
