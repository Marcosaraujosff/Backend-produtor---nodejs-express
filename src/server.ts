import express, { Request, Response } from "express";
import 'express-async-errors';
import cors from 'cors';

import { router } from './router';

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message,
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})


app.listen(process.env.port, () => console.log('servidor online'));