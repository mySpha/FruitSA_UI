import { User } from "../module/user"


export class GetUser {
    static readonly type = '[User] login'
    constructor(public  payload: User){}
}

export class AddUser{
    static readonly type = '[User] sign up'
    constructor(public  payload: User){}
}

export class Logout{
    static readonly type = '[User] logout'
    constructor(){}
}