export interface User {
  userId : number;
  name : string;
  surname: string;
  username:string;
  email: string;
  password : string;
}
export interface CreatedUser{
  name : string;
  surname: string;
  username:string;
  email: string;
  password : string;
}
export interface UpdatedUser{
  userId:number;
  name : string;
  surname: string;
  username:string;
  email: string;
}
