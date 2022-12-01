import { io } from 'socket.io-client';
import { backUri } from './dynamicRoutes';

const client = io(backUri);

export default client;
