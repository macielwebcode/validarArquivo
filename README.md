## Projeto Manipulação && Validação de Arquivo com Nodejs
Projeto desenvolvido com nodejs usando as libs chalk e fs, permitindo manipular arquivo e abstrair texto com regex. Resultado é exibido no console.

<img src="https://img.shields.io/static/v1?label=node&message=software&color=blue&style=for-the-badge&logo=NODE"/>


## Status do Projeto: ✔️ (concluido)

## Descrição
Projeto feito com nodejs permitindo abstrar os links presentes em um texto e lista-los quando o comando definido é executado. 
O texto está em um arquivo que é aberto, lido e validado usando a lib fs. Também é utilizada a lib chalk para que os retornos possam
ficar melhor visualizados em formato de texto. O objetivo era abstrar do texto os links presentes, portanto foi criada uma validação
regex especifica.


✔️ Técnicas e tecnologias utilizadas
- ``Nodejs``
- ``Chalk``
- ``fs``
- ``Regex``  

# :hammer: Funcionalidades do projeto

- `Funcionalidade 1`: encontrar arquivo e ler conteúdo (funcionalidade presente no arquivo src/index)
- `Funcionalidade 2`: filtrar links no texto do arquivo aberto e lido (funcionalidade presente no arquivo src/index.js)
- `Funcionalidade 3`: extrair links do arquivo, validando erros e validando a lista de links encontrados (funcionalidade presente no arquivo src/http-validacao.js)
- `Funcionalidade 4`: processar o texto validando se isFile, isDirectory, ler arquivo retornando a validação (funcionalidade presente no arquivo src/cli.js)
- `Funcionalidade 5`: imprimir lista de links existentes no texto processado e validado o arquivo de texto (funcionalidade presente no arquivo src/cli.js)


## Comandos para testes
### `node ./src/cli.js ./arquivos`
### `node ./src/cli.js ./arquivos/readme.md --valida`



