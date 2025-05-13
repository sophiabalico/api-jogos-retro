import express from 'express';

import GameController from '../controllers/game.controller.js';

const gameRouter = express.Router();

gameRouter.get('/', GameController.findAll); // Listar todos os jogos
gameRouter.post('/', GameController.create); // Criar um novo jogo

export default gameRouter;