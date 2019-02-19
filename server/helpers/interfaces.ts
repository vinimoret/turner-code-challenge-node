import * as express from 'express';
import { Connection } from 'mongoose';

export interface Context {
  req: express.Request;
  res: express.Response;
  db: Connection;
}
