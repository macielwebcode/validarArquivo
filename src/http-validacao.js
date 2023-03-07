import chalk from 'chalk';

function extraiLinks(arrayLinks){
    return arrayLinks.map((indexLink) => Object.values(indexLink).join());
}

async function checkStatus(listaUrls){
    const arrayStatus = await Promise
    .all(
        listaUrls.map(async (itemUrl) => {
            try {
                const response = await fetch(itemUrl)
                return response.status;
            } catch (error) {
                return manejarErros(error)
            }
            
        })
    )
    return arrayStatus;
    
}

function manejarErros(erro){
    if(erro.cause.code === 'ENOTFOUND'){
        return 'link nao encontrado'
    }else{
        return 'ocorreu algum erro'
    }
    
}

export default async function listaValidada(listaLinks){
    const links = extraiLinks(listaLinks);
    const status = await checkStatus(links)

    return listaLinks.map((obj, index) => ({
        ...obj,
        status: status[index]
    }));
}