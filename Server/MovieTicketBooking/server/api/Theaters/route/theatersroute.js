import theaterController from '../controller/theaterscontroller';
export default class RigisterRoute {
  static init(router) {
    router
      .route('/theater')
      .get(theaterController.getall)
      .post(theaterController.createNew)

  }
}
