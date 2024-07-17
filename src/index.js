const express = require('express');
const bodyParser = require('body-parser');
const TicketController = require('./controllers/ticket-controller');

const { PORT } = require('./config/serverConfig');

// const { sendBasicEmail } = require('./services/email-service');
const jobs = require('./utils/job')


const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        jobs();

        // sendBasicEmail(
        //     'abhinav26dogra@gmail.com',
        //     'abhinavdogra808@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are u nigga'
        // );  
    }); 
}

setupAndStartServer();