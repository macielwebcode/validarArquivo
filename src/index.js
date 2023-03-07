import fs from 'fs';
import chalk from "chalk";

// console.log(chalk.blue('ola mundo teste chalk'));



function getLinks(text){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

    // TESTE USANDO METODO NATIVO REGREX
    // const capture = regex.exec(text);
    
    // TESTE TRABALHANDO COM MÉTODO DE STRING
    // const capture = text.match(regex);

    const capture = [...text.matchAll(regex)] // EXPANDIR O CONTEUDO COM SPREAD OPERATOR METODO DE ARRAY
    const results = capture.map(/*para cada capture*/captura =>({
        [captura[1]]: captura[2]
    }))


    return results.length !== 0 ? results : 'Não Há Links no arquivo';

}


function tratarError(erro){
    throw new Error(chalk.red(erro.code, 'arquivo inexistente no diretório'));
}



// ASYNC/AWAIT
async function getDocumentWithAsyncAwait(caminho){
    try{
        const encoding = 'utf-8';
        const response = await fs.promises.readFile(caminho, encoding)
        return getLinks(response);
    }
    catch (erro){
        tratarError(erro)
    }
    
}



// CAMINHO TESTE ./arquivos/readme.md
// getDocumentWithAsyncAwait('./arquivos/readme.md');

// EXPRESSAO REGULAR PARA USAR NO TEXTO PEGANDO [ ]
//   \[([^[\]]*?)\]

// EXPRESSAO REGULAR PARA PEGAR LINKS ENTRE (  )
// \((https?:\/\/[^\s?#.].[^\s]*)\)


export default getDocumentWithAsyncAwait;



// acesso ao arquivo sem promite
function getDocumentWithoutPromise(caminho){
    const encoding = 'utf-8';
    // USA UNDERLINE NO LUGAR DO PARAMETRO QUANDO N USA A VARIAVEL
    fs.readFile(caminho, encoding, (erro, texto) => {
        if(erro){
            tratarError(erro);
        }
        console.log(chalk.green(texto));
    })
}

// promise usando THEN
function getDocumentPromisseWithThen(caminho){
    const encoding = 'utf-8';
    // USA UNDERLINE NO LUGAR DO PARAMETRO QUANDO N USA A VARIAVEL
    fs.promises
      .readFile(caminho, encoding)
      .then((texto) => console.log(chalk.green(texto)))
      .catch(tratarError)
}