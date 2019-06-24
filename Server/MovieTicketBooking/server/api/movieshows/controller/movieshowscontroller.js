import movieshowsDao from "../dao/movieshowsdao"
export default  class movieshowsController{


  static getall(req,res){
    movieshowsDao.getAll()
      .then(result=>res.status(200).json(result))
      .catch(error=>res.status(400).json(error))
  }
  static createnew(req,res){
    movieshowsDao.createNew(req.body)
      .then(result=>res.status(200).json(result))
      .catch(error=>res.status(400).json(error))
  }

}
