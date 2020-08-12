import {app} from './app'

// get port from env or set to 5555
const port = process.env.port||5555;

//start server
const server = app.listen(port, () => {
    console.log('Server listening on:',port);
});