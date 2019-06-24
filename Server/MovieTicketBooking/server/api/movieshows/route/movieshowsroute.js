import movieshowsController from '../controller/movieshowscontroller'
export default class movieshowsroute {
  static init(router){
    router
      .route('/movieshows')
      .get(movieshowsController.getall)
      .post(movieshowsController.createnew)

  }

}
