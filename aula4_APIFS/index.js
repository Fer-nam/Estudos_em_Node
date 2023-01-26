const fs = require('fs').promises;
const path = require('path');

// readir - scaneia os documentos do diretorio atual

//rootdir diretorio raiz

//stat pega informações dos arquivos


//Código abaixo faz uma leitura de todas as pastas no diretorio selecionado
async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)
        const stats =  await fs.stat(fileFullPath);

        //evita mostrar arquivos .git e as pastas do node_modules
        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;
        
        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }
        
        //Mostra somente as pastas com final .css
        if(!/\.css/g.test(fileFullPath)) continue;

        //Para não listar pastas ocultas do git
       

        console.log(fileFullPath);
    }
}

readdir('/home/fernando/Documentos/jsnode/');