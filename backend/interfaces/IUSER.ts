export interface IUser {
    username: string,
    birth: Date,
}
  
export interface User extends IUser {
    id: number
}