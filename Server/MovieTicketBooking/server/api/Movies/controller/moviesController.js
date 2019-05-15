import MoviesDao from "../dao/moviesDao";


export default  class  MoviesController {

  static postall(req,res){
    console.log("controller Body:",req.body);
    MoviesDao.postall(req.body)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
  }
}

