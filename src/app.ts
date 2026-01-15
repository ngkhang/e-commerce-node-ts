/**
 * @author Khang Nguyen
 * @link https://github.com/ngkhang
 * @filename app.ts
 * Lasted Update: 2026-01-14
 */
import express from 'express';

export const createApp = () => {
  const app = express();

  app.get('/health', (req, res) => {
    return res.status(200).json({
      status: 200,
      message: 'OK'
    });
  });

  return app;
};
