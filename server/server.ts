import type { Request, Response } from 'express';

const express = require('express')

const app = express();
const port = process.env.PORT || 4000;

app.get('/api', (req: Request, res: Response) => {
  res.send('hello');
});

app.listen(port, () => console.log(`Running on port ${port}`));

// how to do tsc automatically when you run npm run server