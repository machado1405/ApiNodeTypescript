/**
 * Importação das funcionalidades do express
 */
import express from 'express';

/**
 * Atribuição e exportação do conteúdo express
 */
const server = express();
server.get('/', (req, res) => {
  return res.send('Olá dev, seja bem vindo!');
});

export { server };
