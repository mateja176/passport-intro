import * as express from 'express';

export const app = express();

app.get('/', (_, res) => {
  res.json('Hello World');
});
