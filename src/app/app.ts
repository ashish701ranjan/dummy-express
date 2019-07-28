import express from "express";
// used to parse the form data that you pass in the request
import * as bodyParser from "body-parser";

class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this._config();
  }

  private _config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
