import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from "mongoose";
import { TodoController } from "./controllers/todos.controller";
import { MONGODB_URL } from "./constants";

class App {
  public app: Application;
  public todoController: TodoController

  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();

    this.todoController = new TodoController(this.app);
  }

  private setConfig() {
    //Allows us to receive requests with data in json format
    this.app.use(bodyParser.json());

    //Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended:true}));

    //Enables cors
    this.app.use(cors());
  }

  //Connecting to our MongoDB database
  private setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  }
}

export default new App().app;