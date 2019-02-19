import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

import * as fs from 'fs';
import expressPlayground from 'graphql-playground-middleware-express';
import { makeExecutableSchema } from 'graphql-tools';
import * as path from 'path';
import resolvers from './schema';
import mongoose from 'mongoose';

(async () => {
  const prefix = process.env.NODE_ENV === 'development' ? '../' : './build/';
  const serverDir = process.env.NODE_ENV === 'development' ? './' : './build/server/';

  // Load environment variables from .env file, where API keys and passwords are configured
  dotenv.config({ path: `${prefix}.env` });

  // Create Express server
  const app = express();

  // Express configuration
  app.set('port', process.env.PORT || 5000);
  app.set('env', process.env.NODE_ENV || 'production');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // swallow the JWT Expired Exception
  app.use((err: any, req: Request, res: Response, next: any) => {
    next();
  });

  if (process.env.NODE_ENV !== 'production') {
    app.use(express.static(path.resolve(`${prefix}`)));
  }

  const typeDefs = fs.readFileSync(path.resolve(`${serverDir}schema.graphql`)).toString();
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    context: ({ req, res }: any) => {
      mongoose.connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true }
      );
      return {
        db: mongoose.connection,
        req,
        res,
      };
    },
    tracing: process.env.NODE_ENV === 'development',
    cacheControl: process.env.NODE_ENV === 'development',
  });
  server.applyMiddleware({ app });

  app.use('*', (req: any, res: any, next) => {
    next();
  });

  if (process.env.NODE_ENV !== 'production') {
    app.get('/playground', expressPlayground({ endpoint: '/graphql' }));
  }

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(`${prefix}`)));
    app.get('*', (req, res) => {
      res.sendFile(path.join(path.resolve(`${prefix}`), 'index.html'));
    });
  }

  // Start Express server.
  app.listen(app.get('port'), () => {
    console.log('  App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
  });
})().catch((err: any) => console.log(err));
