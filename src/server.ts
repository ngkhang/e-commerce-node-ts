/*
 Author: Khang Nguyen - https://github.com/ngkhang
 Filename: server.ts
 Lasted Update: 2026-01-16
*/
import { createApp } from './app';

const HOST = 'localhost';
const PORT = 3300;

(async () => {
  const app = createApp();
  app.listen(PORT, () => {
    console.info(`Server is running on http://${HOST}:${PORT}`);
  });
})()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
