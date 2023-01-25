/*
const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => nome + ' ' + sobrenome;
*/
//console.log(module) mostra os modulos do node

/*
Forma longa
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
*/

/*
Forma curta
exports.Nome =nome;
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
console.log(exports);
*/
class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}


//exportando varios de uma vez

module.exports ={
    nome, sobrenome, Pessoa
};

