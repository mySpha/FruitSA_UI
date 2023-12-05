import { CanActivate, Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { UserState } from "../auth.state";
import { User } from "../../module/user";
import { Injectable } from "@angular/core";
import { Token } from "../../model/token";

@Injectable()
export class AuthGuard implements CanActivate {
    user!: Token | null
    constructor(private store: Store, private router: Router){}
    canActivate() {
        this.store.select(UserState.getUser).subscribe(data =>{
            this.user = data
        })
        if(!this.user){
            this.router.navigate(['auth'])
            return false
        }
      return true;
    }
  }