import express from 'express';
import path from 'path';
import bodyParser  from 'body-parser';
import cors from 'cors';

import routes from './routes';

import PhoneController from './controllers/Phone'

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.use(morgan('combined', { stream: winston.stream }));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname)));

app.use(cors());

// app.get('/', (req, res) => {
//     return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
// })

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.use('/api', routes)




// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('No API mapping found');
    err.status = 400;
    next(err);
});

// error handler
app.use(function (err, req, res, bin) {
    // set locals, only providing error in development

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    // render the error page
    res.status(err.status || 500);
    res.json({error:err})
    res.sendFile(path.join(__dirname, 'public', 'error.html'));
});

module.exports = app;