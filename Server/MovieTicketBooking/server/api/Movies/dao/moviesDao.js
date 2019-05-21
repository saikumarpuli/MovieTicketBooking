import models from "../../../models"
import Promise from "bluebird";


export default class MoviesDao {

  static postall(request) {
    return new Promise((resolve, reject) => {
       models.moviedetails.create({Name:request.Name,ReleaseDate:request.ReleaseDate,Synapsis:request.Synapsis,Cast:
        request.Cast,Crew:request.Crew})
        .then(results => resolve(results))
        .catch(error => reject(error));
    })
  }
  static getall(){
    return new Promise((resolve, reject) => {
      models.moviedetails.findAll({})
        .then(results => resolve(results))
        .catch(error => reject(error));
    })
  }

}



