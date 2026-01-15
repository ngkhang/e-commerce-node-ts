/**
 * @author Khang Nguyen
 * @link https://github.com/ngkhang
 * @filename server.ts
 * Lasted Update: 2026-01-15
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
