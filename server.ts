require('dotenv').config();
import * as express from 'express';
const app = express();
import { router } from './routes';
import * as bodyParser from 'body-parser';

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', router);

app.get('/', (req, res) => {
    res.json({success: 'true'});
})

app.listen(8000, () => console.log('server is running on port 8000'));