import express from 'express';

import RecordController from '../controllers/record.controller.js';

const recordRouter = express.Router();

recordRouter.get('/', RecordController.findAll); // Listar todos os recordes
recordRouter.post('/', RecordController.create); // Criar um novo recorde

export default recordRouter;