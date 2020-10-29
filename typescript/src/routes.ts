import {Request, Response} from 'express';
import createUser from './services/CreateUsers';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: 'Bruno', 
        email: 'bruno@gmail.com',
        password: '123456',
        techs: [
            'Node', 
            'React', 
            'React Native', 
            {title: 'javascript', experience: 100}
        ],
    });

    return response.json({message: 'Hello World' });
}