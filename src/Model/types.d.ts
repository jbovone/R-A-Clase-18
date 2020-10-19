import { Router } from 'express'
import { RequestHandler, RequestParamHandler, PathParams } from 'express-serve-static-core'


interface baseController {
    manifesto(): typeof Router;
    provider: Router;
    base: PathParams;
}

interface ServiceBase {
    remove: RequestHandler;
    create: RequestHandler;
    getById: RequestHandler;
    getAll: RequestHandler;
    getByfilters: RequestHandler;
}

interface clientsService extends ServiceBase{
    emailVerify: RequestHandler;
    completeRegistration:RequestHandler;
}

interface automobileService extends ServiceBase{
    updateCar: RequestHandler;
}
interface transactionsService extends ServiceBase{
    extendContract: RequestHandler;
}