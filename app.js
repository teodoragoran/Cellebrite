import express from 'express';
import path from 'path';
import bodyParser  from 'body-parser';
import cors from 'cors';

import routes from './routes';

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname)));

app.use(cors());

app.use('/api', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('No API mapping found');
    err.status = 400;
    next(err);
});

// error handler
app.use(function (err, req, res, bin) {

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500)
    res.json({error:err});
});

module.exports = app;