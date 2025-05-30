import express, {Express, Request, Response} from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});