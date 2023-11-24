# Integrantes (Todos 1ESPV)
- Pedro Augusto Barone - RM: 99781
- João Pedro de Albuquerque Oliveira - RM:551579

# Aplicação hAppVida Fitness
Uma aplicação que demonstra o que a hAppVida Fitness é, simulando cadastro e login via API Json.
Para testar, logue com o usuário presente no arquivo "users.json" (Login: user@teste.com // Senha: 12345). Caso deseje, também pode cadastrar o seu próprio usuário pela UI do site.

- [Node.js](https://nodejs.org/en/)
- [json-server](https://www.npmjs.com/package/json-server) (para simular uma API RESTful)

## Passo a Passo para Configuração

1. **Instalação de Dependências**
   No diretório raiz do projeto, execute:
npm install, isso vai instalar os módulos necessários, incluindo o json-server.

2. **Iniciar a Simulação da API**
No diretório raiz do projeto, execute:
`npm run dev`

Isso inicia o `json-server` na porta 3000, usando `users.json` como seu banco de dados, e conjuntamente inicia a aplicação. 
Isso foi feito baseado num script no package.json, usando o módulo `npm-run-all`.


A aplicação deve ser iniciada em qualquer porta que **NÃO** seja a 3000, já que essa é a porta da base de dados json onde ficam os usuários, então por favor, fique atento para que não haja nenhum terminal que esteja utilizando essa porta.


