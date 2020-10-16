import express, { RequestHandler, Application } from 'express';

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(process.env.PORT || 3000);

class ApiServiceProvider {
  constructor(private service: typeof express) {
    this.service = this.service().bind(this);
  }
  get(action: string, fn: RequestHandler) {
    return this.service.Router().get(action, fn);
  }
  create(port: Application) {
    this.service.application.listen(process.env.PORT || port, () =>
      console.log(`$mounted on ${port}`)
    );
  }
}
