import chalk from 'chalk';
import fs from 'fs';
import getDocumentWithAsyncAwait from "./index.js";
import listaValidada from './http-validacao.js';


const url = process.argv;

async function imprimeLista(valida, resultado, identificador = ''){

    if(valida){
        console.log(
            chalk.yellow('Lista Validada'), 
            chalk.black.bgGreen(identificador),
            await listaValidada(resultado))
    }else{
        console.log(
            chalk.yellow('Lista de Links'), 
            chalk.black.bgGreen(identificador),
            resultado)
    }

   
}

async function processTexto(argumentos){
    const caminho = argumentos[2];

    const valida = argumentos[3] === '--valida';


    try {
        fs.lstatSync(caminho);
    } catch (error) {
        if(error.code === 'ENOENT'){
            console.log(chalk.red.bgYellow('arquivo ou diretório não existe'))
            return;
        }
    }


    if(fs.lstatSync(caminho).isFile()){
        const result = await getDocumentWithAsyncAwait(argumentos[2]);
        imprimeLista(valida, result)
    }else if(fs.lstatSync(caminho).isDirectory()){
        const lerArquivos = await fs.promises.readdir(caminho)
        lerArquivos.forEach(async (element) => {
            const lista = await getDocumentWithAsyncAwait(`${caminho}/${element}`)
            imprimeLista(valida, lista, element)
        });
    }
}

processTexto(url)
