import { readFile } from 'fs';
import { dirname, resolve, join } from 'path';
import { createServer } from 'http';
import { IncomingMessage, ServerResponse } from 'node:http';

export const httpServer = createServer((req: IncomingMessage, res: ServerResponse): void => {
  const __dirname: string = resolve(dirname(''));
  const file_path: string = join(__dirname, req.url === '/' ? '/front/index.html' : '/front' + req.url);

  readFile(file_path, (err: NodeJS.ErrnoException | null, data: Buffer): void => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});
