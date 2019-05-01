import {environment} from "../../../environments/environment";
export const REGISTRATION ='REGISTRATION';
export const UserEndPoint =(type:string,params:any)=> {
  switch (type) {
    case REGISTRATION:
      return environment.API_ROOT + 'register';
  }
}
