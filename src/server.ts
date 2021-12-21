import express from 'express';
import { usersRoutes } from './routes/users.routes';

const server = express();

server.use(express.json());

server.use(usersRoutes);

server.listen(3333, () => {console.log('Server is running on port 3333!')});