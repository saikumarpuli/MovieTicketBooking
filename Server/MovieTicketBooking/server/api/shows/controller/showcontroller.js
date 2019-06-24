import ShowDao from '../dao/showdao'
export default class ShowController {
  static getall(req,res){
    ShowDao.getAll()
      .then(result=>res.status(200).json(result))
      .catch(error=>res.status(400).json(error))
  }
  static createall(req,res){
    ShowDao.createNew(req.body)
      .then(result=>res.status(200).json(result))
      .catch(error=>res.status(400).json(error))
  }
}
