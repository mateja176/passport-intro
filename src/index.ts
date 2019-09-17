import { app } from './app';

const port = parseInt(process.env.PORT, 10) || 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
