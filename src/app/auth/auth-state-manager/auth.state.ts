
import { Injectable } from "@angular/core";
import { State,StateContext,Action,Selector } from "@ngxs/store";
import { User } from "../module/user";
import { AddUser, GetUser,Logout } from "./auth.actions";
import { AuthGetUserService } from "./service/auth-get-user.service";
import { AuthAddUserService } from "./service/auth-add-user.service";
import { Token } from "../model/token";


export interface UserStateModel{
    user: Token | null,
    newUser: string | null
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

    constructor(private loginService: AuthGetUserService,
        private signUpService: AuthAddUserService){}

    @Selector()
    public static getUser(state: UserStateModel){
        return state.user;
    }

    @Selector()
    public static addUser(state: UserStateModel){
        return state.newUser;
    }
    
    @Action(GetUser)
    get({patchState}:StateContext<UserStateModel>, {payload}:AddUser){
        this.loginService.user$.subscribe(data =>{
            patchState({
                user: data
            });
        });
        this.loginService.getUser(payload);
    }

    @Action(AddUser)
    getDetails({patchState}:StateContext<UserStateModel>, {payload}:AddUser){
        this.signUpService.user$.subscribe(data =>{
            patchState({
                newUser: data
            });
        });
        this.signUpService.getUser(payload);
    }

    @Action(Logout)
    logout({patchState}:StateContext<UserStateModel>){
        patchState({
            user: null
        });
    }
    
}