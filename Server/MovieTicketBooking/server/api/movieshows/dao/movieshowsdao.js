import models from "../../../models"
import Promise from "bluebird"
export default class movieshowsdao {
  static createNew(request){
    return new Promise((resolve,reject)=>{
      models.movieshows.create({show_id:request.show_id, movie_id:request.movie_id})
        .then(result=>resolve(result))
        .catch(error=>reject(error))
    })
  }
  static getAll(){
    return new Promise ((resolve,reject)=>{
      models.movieshows.findAll({})
        .then(result=>resolve(result))
        .catch(error=>reject(error))
    })
  }
}
