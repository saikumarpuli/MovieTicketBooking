import models from "../../../models"
import Promise from "bluebird";
export default class MoviesDao {
  static postall(request) {
    return new Promise((resolve, reject) => {
      models.theatersdetails.create({theatername:request.theatername,city:request.city})
        .then(results => resolve(results))
        .catch(error => reject(error));
    })
  }
  static getall(){
    return new Promise((resolve, reject) => {
      models.theatersdetails.findAll({})
        .then(results => resolve(results))
        .catch(error => reject(error));
    })
  }

}



