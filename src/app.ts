import * as bodyParser from 'body-parser'
import * as express from 'express'
import { Routes } from './routes/routes'

class App {
    public app: express.Application
    public routePrv: Routes = new Routes()

    constructor() {
        this.app = express()
        this.routePrv.routes(this.app)
        this.config()
    }
    private config(): void {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
    }
}

export default new App().app
