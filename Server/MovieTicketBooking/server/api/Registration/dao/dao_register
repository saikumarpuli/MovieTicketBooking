import models from "../../../models"
const jwt=require('jsonwebtoken')

import Promise from "bluebird";
 export default class RegisterDao {
   static getAll(){
     return new Promise((resolve,reject)=>{
       models.registration.findAll({})
         .then(results=>resolve(results))
         .catch(error=>reject(error))
     })
   }

   static createNew(body){
     return new Promise((resolve,reject)=>{
        models.registration.create({fullname:body.fullname, phoneNo:body.phoneNo, email:body.email, password:body.password})
         .then(results=>{
           let payload={subject:results._id}
            let token=jwt.sign(payload,'secretkey')
           resolve({token})
          })


         .catch(error=>reject(error))
     })
   }

   static getById(req){
     return new Promise((resolve,reject)=>{
       models.registration.findAll({where:{email:req}})
         .then(results=>resolve(results))
         .catch(error=>reject(error))
     })
   }



 }
