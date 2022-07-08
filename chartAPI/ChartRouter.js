import Router from "express";
import ChartController from "./ChartController.js";

const chartRouter = new Router();

chartRouter.post('/chart', ChartController.create)
chartRouter.get('/chart', ChartController.getAll)
chartRouter.get('/chart/:id', ChartController.getOne)
chartRouter.put('/chart', ChartController.update)
chartRouter.delete('/chart/:id', ChartController.delete)

export default chartRouter;