import { Server } from './server';
import {loadConfig} from './dependency-injection';

let server

try {
  (async () => {
    await loadConfig();
    const port = process.env.PORT || '3000'
    const server = new Server(port);
    await server.listen()
  })()
} catch (e) {
  handleError(e);
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
  process.exit(1);
});
function handleError(e: any) {
  console.log(e);
  process.exit(1);
}

export default server

