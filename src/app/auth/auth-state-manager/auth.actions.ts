import { User } from "../module/user"


export class GetUser {
    static readonly type = '[User] get'
    constructor(public  payload: User){}
}

export class AddUser{
    static readonly type = '[User] add'
    constructor(public  payload: User){}
}