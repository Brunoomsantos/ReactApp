import {Request, Response} from 'express';
import createUser from './services/CreateUsers';

export function helloWorld(request: Request, response: Response) {
    const user = createUser('Bruno', 'bruno@gmail.com', '123456');

    return response.json({message: 'Hello World' });
}