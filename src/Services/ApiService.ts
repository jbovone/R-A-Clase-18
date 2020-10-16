import { EventEmitter } from 'events';
import express from 'express';
import ServerProvider from './Providers/ServerProvider';

export default class ApiService<ServerProvider> extends EventEmitter {
  public get() {}
}
