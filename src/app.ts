// tslint:disable: import-name
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { mongodb } from './config';
import router from './routes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();
    this.setRoutes();
  }

  private setConfig() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended:true }));
    this.app.use(cors());
  }

  // Connecting to our MongoDB database
  private setMongoConfig() {
    console.log(`Connect mongodb server: ${mongodb.CONNECTION_URL}`);
    mongoose.Promise = global.Promise;
    mongoose.connect(mongodb.CONNECTION_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  }

  private setRoutes() {
    this.app.use(router);
  }
}

export default new App().app;
