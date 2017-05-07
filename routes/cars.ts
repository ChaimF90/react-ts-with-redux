import '../declaredModules';
import * as express from 'express-promise-router';

const router = express();
import db from '../repo';
import { Request, Response } from 'express';

router.post('/addCar', async (req: Request, res: Response) => {
    let id = await db.cars.addCar(req.body);
    res.json(id);
})

export default router;