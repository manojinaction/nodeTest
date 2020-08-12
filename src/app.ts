import express from 'express';
import * as bodyParser from 'body-parser';

import FirstVersion from './api/FirstVersion';
import SecondVersion from './api/SecondVersion';

const app = express();

// res convert to json using bodyparser
app.use(bodyParser.json({
    verify(req: any, res, buf) {
        req.rawBody = buf;
    }
}));

// V1 parse
const parseFirst = async (req, res) => {
    if (req.body.data && req.body.data.length === 25){
        const firstVersion = new FirstVersion();
        const result = firstVersion.parse(req.body.data);
        res.send({statusCode: res.statusCode, data: result});
    } else {
        res.status(404).send({statusCode: res.statusCode, message: "bad input!!"})
    }
};

// V2 parse
const parseSecond = async (req, res) => {
    if (req.body.data && req.body.data.length === 25){
        const secondVersion = new SecondVersion();
        const result = secondVersion.parse(req.body.data);
        res.send({statusCode: res.statusCode, data: result});
    } else {
        res.status(404).send({statusCode: res.statusCode, message: "bad input!!"})
    }
};

app.get('/', (req, res) => res.send('Node Express Test!'));

// Set up the routing.
const apiVer1 = express.Router();
const apiVer2 = express.Router();

apiVer1.post('/parse', parseFirst);
apiVer2.post('/parse', parseSecond);

app.use('/api/v1', apiVer1);
app.use('/api/v2', apiVer2);
app.use('/api', apiVer2); // default latest version

export {app};