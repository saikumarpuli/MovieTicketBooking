import ShowController from '../controller/showcontroller'
export default class showsroute {
  static init(router) {
    console.log("this is route")
   router
     .route('/shows')
     .get(ShowController.getall)
     .post(ShowController.createall)
  }

}
