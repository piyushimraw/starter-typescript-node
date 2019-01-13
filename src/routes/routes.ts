import {Request, Response} from 'express';

export class Routes {
    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request Succesfull!!!',
                });
            });
        // Get for Contacts
        app.route('/contacts')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET Contacts Successfull !!',
                });
            })
            .post((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'POST Contacts Successfull',
                });
            });
        }
}
