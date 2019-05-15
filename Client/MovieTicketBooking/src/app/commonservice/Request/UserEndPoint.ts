import {environment} from "../../../environments/environment";
export const REGISTRATION ='REGISTRATION';
export const MOVIEDETAILS ='MOVIEDETAILS';
export const UserEndPoint =(type:string,params:any)=> {
  switch (type) {
    case REGISTRATION:
      return environment.API_ROOT + 'register';
    case MOVIEDETAILS:
      return environment.API_ROOT + 'moviedetails';
}
}
