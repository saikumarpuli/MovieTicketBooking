import TodoRoutes from "../api/todo/route/todo-route";
import RigisterRoute from "../api/Registration/route/route_register"

export default class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     RigisterRoute.init(router);

     app.use("/", router);
   }
}
