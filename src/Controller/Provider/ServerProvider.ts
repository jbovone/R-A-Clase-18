import express, { RequestHandler, Application } from 'express';

class ServerProvider {
  constructor(private service: typeof express) {
    this.service = this.service().bind(this);
  }
  create(port: number) {
    this.service.application.listen(process.env.PORT || port, () =>
      console.log(`$mounted on ${port}`)
    );

    return this.service.Router();
  }
}

export default ServerProvider;
