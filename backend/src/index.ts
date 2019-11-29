import {createConnection} from 'typeorm';
import * as http from 'http';
import *as socketIO from 'socket.io';

import app from './app';

createConnection().then(connection => {

    const server = http.createServer( app.express );
    const io = socketIO( server );

    //Listner de conexão ao soscket
    io.on('connect', (socket) => {
        console.log('Cliente conectado...');
    })

    app.startRoutes( io );

    server.listen(3000, () => {
        console.log('Applicação está rodando na porta 3000');
    })

}).catch(error => {
    console.log('TypeORM dont connected: %s', error);
});