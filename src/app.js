import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes/index';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
const app = express();
app.disable('x-powered-by');

// View engine setup
app.use(helmet());
app.use(compression());
app.use(logger('dev', {
  skip: () => app.get('env') === 'test'
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

// Catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// Error handler
// app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
//   res
//     .status(err.status || 500)
//     .render('error', {
//       message: err.message
//     });
// });

export default app;
