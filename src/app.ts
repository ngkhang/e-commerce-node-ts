/**
 * @Author Khang Nguyen
 * Github https://github.com/ngkhang
 * Lasted Update January 14 2026
 */

import express from 'express';

export const createApp = () => {
  const app = express();

  app.get("/health", (req, res) => {
    return res.status(200).json({
      status: 200,
      message: "OK",
    });
  });

  return app;
}
