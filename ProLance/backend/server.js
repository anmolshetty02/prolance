import express from 'express';
import initialize from './apps/app.js';

const app = express();
const port = 3000;

app.use('/upload', express.static('upload'));
initialize(app);
app.listen(port, () => console.log('Server is listening at port 3000'));