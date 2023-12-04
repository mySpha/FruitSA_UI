
import { Injectable } from "@angular/core";
import { State,StateContext,Action,Selector } from "@ngxs/store";
import { User } from "../module/user";
import { AddUser, GetUser } from "./auth.actions";
import { AuthGetUserService } from "./service/auth-get-user.service";


export interface UserStateModel{
    user: User | null,
    newUser: User | null
}

@State<UserStateModel>({
    name: 'UserState',
    defaults: {
        user: null,
        newUser: null
    }
})

@Injectable()
export class UserState{

    constructor(private service: AuthGetUserService){}

    @Selector()
    public static getUser(state: UserStateModel){
        return state.user;
    }

    @Selector()
    public static addUser(state: UserStateModel){
        return state.newUser;
    }
    
    @Action(GetUser)
    getAll({patchState}:StateContext<UserStateModel>, {payload}:AddUser){
        this.service.category$.subscribe(data =>{
            if(data.email != payload.email || data.password != payload.password)
            {
                return
            }
            patchState({
                user: data
            });
        });
        this.service.getUser(payload);
    }

    @Action(AddUser)
    getDetails({patchState}:StateContext<UserStateModel>, {payload}:AddUser){
        patchState({
            newUser: payload
        });
    }
    
}