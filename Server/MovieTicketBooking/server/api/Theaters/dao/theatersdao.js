import models from "../../../models"
import Promise from "bluebird";
export default class MoviesDao {
  static postall(request) {
    return new Promise((resolve, reject) => {
      models.addtheater.create({theatername:request.theatername,address:request.address,city:request.city,movie_id: request.movie_id})
        .then(results => resolve(results))
        .catch(error => reject(error));
    })
  }
  static getall(){
    return new Promise((resolve, reject) => {
      console.log("this is route");
      models.addtheater.findAll({})
        .then(results => resolve(results))
        .catch(error => reject(error));
    })
  }

}



