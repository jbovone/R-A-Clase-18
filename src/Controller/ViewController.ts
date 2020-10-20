import { Router } from 'express';
import path from 'path';

class ViewController {
  provider;
  base;
  staticPath: string;
  constructor(router: Router) {
    this.base = '/';
    this.staticPath = path.join(process.cwd(), 'dist', 'View', 'build', 'index.html');
    this.provider = router;
  }
  manifesto() {
    //this.provider.use(this.staticPath);
    this.provider.get('/home', (_, res) => res.sendFile(this.staticPath));
    this.provider.get(`/about`, (_, res) => res.sendFile(this.staticPath));
    this.provider.get(`/sign-in`, (_, res) => res.sendFile(this.staticPath));
    return this.provider;
  }
}
/**
 * this is an app, so only needs to serv /.
 * These ones are pointers to the redux state store
 * and the app router to handle.
 */

export default ViewController;
