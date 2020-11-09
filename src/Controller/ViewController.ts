import express, { Router } from 'express';
import path from 'path';

class ViewController {
  provider;
  base;
  staticPath: string;
  constructor(router: Router) {
    this.base = '/';
    this.staticPath = path.join(process.cwd(), 'src', 'View', 'build');
    this.provider = router;
  }

  manifesto() {
    this.provider.use(express.static(this.staticPath));
    this.provider.get('/', (_, res) => res.sendFile(path.join(this.staticPath, 'index.html')));
    this.provider.get('/home', (_, res) => res.sendFile(path.join(this.staticPath, 'index.html')));
    this.provider.get(`/about`, (_, res) => res.sendFile(path.join(this.staticPath, 'index.html')));
    this.provider.get(`/bookings`, (_, res) => res.sendFile(path.join(this.staticPath, 'index.html')));
    this.provider.get(`/account`, (_, res) => res.sendFile(path.join(this.staticPath, 'index.html')));
    return this.provider;
  }
}
/**
 * this is an app, so only needs to serv /.
 * These ones are pointers to the redux state store
 * and the app router to handle.
 */

export default ViewController;
