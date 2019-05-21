import MoviesController from "../controller/moviesController";
export  default class MoviesRoute {
 static init(router){
     router
      .route('/moviedetails')
      .post(MoviesController.postall)
     .get(MoviesController.getall)
 }
}


