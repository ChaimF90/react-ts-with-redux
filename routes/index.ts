import '../declaredModules';
import * as express from 'express-promise-router';
const router = express();
import people from './people';
import cars from './cars';

router.use('/people', people);
router.use('/cars', cars);
export { router };