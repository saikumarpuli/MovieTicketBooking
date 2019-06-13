import theaterDao from "../dao/theatersdao"

export default  class  theaterController {

  static createNew(req,res){
    console.log("hello this is route");
    theaterDao.postall(req.body)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
  }
  static getall(req,res){
    theaterDao.getall()
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))  }
}
