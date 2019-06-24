import models from '../../../models'
import Promise from "bluebird";
export default class ShowDao {
  static createNew(request){
    return new Promise((resolve,reject)=>{
      models.shows.create({showtimings:request.showtimings})
        .then(result=>resolve(result))
        .catch(error=>reject(error))
    })
  }
  static getAll(){
    return new Promise((resolve,reject)=>{
      models.shows.findAll()
        .then(result=>resolve(result))
        .catch(error=>reject(error))
    })
  }

}
