import TodoRoutes from "../api/todo/route/todo-route";
import RigisterRoute from "../api/Registration/route/route_register"
import MoviesRoute from "../api/Movies/route/moviesRoute";
import theatersroute from "../api/Theaters/route/theatersroute";
import showsroute from "../api/shows/route/showroute";
import  movieshowsroute from "../api/movieshows/route/movieshowsroute"

export default class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     RigisterRoute.init(router);
     MoviesRoute.init(router);
     theatersroute.init(router);
     showsroute.init(router);
     movieshowsroute.init(router)
     app.use("/", router);
   }
}
