# Lojinha Web Automação em Cypress
Esse é um repositório que contém a automação de alguns testes Web de um software denominado Lojinha Web. Os sub-tópicos abaixo descrevem algumas decisões tomadas na estruturação do projeto.

## Tecnologias Utilizadas
- Javascript
https://www.ecma-international.org/publications-and-standards/standards/ecma-262/
- Node.js
https://nodejs.org/en/download/
- Cypress
https://docs.cypress.io/guides/getting-started/installing-cypress

## Testes Automatizados
Testes para validar as partições de equivalência relacionadas ao valor do produto na Lojinha Web, que estão vinculados diretamente à regra de negócio que diz que o valor do produto deve estar entre R$ 0,01 e R$ 7.000,00

## Notas Gerais
- Sempre utilizamos a anotação Before Each para abrir o navegador. Por padrão, o Cypress maximiza a tela, define um tempo de espera e navega para a página da Lojinha Web.
- Nesse projeto fazemos uso do Cypress 11.1.0