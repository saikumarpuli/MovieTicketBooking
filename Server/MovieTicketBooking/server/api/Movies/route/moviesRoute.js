import MoviesController from "../controller/moviesController";
export  default class MoviesRoute {
 static init(router){
    console.log("Hello router");
    router.route('/moviedetails').post(MoviesController.postall);
 }
}


