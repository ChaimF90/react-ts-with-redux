import '../declaredModules';
import * as express from 'express-promise-router';

const router = express();
import db from '../repo';
import { Request, Response } from 'express';

router.post('/addPeron', async (req: Request, res: Response) => {
    let id = await db.people.addPerson(req.body);
    res.json(id);
})

router.get('/getAllPeople', async (req: Request, res: Response) => {
    let allPeople = await db.people.getAllPeople();
    res.json(allPeople);
})

router.post('/deletePerson', async (req: Request, res: Response) => {
    let deleted = await db.people.deletePerson(req.body.id);
    res.json(deleted);
})

export default router;