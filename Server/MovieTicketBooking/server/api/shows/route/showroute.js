import ShowController from '../controller/showcontroller'
export class ShowRoute {
  static init(router) {
   router
     .route('/shows')
     .get(ShowController.getall)
     .post(ShowController.createall)
  }

}
