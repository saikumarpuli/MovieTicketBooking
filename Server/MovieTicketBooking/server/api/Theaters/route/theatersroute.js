import theaterController from '../controller/theaterscontroller';
export default class RigisterRoute {
  static init(router) {
    router
      .route('/theaters')
      .get(theaterController.getall)
      .post(theaterController.createNew)

  }
}
