import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvides{

    constructor(){

    }

    isAuthenticate(){
        return true;
    }

    login(body){
        //body.username;
        //body.password;
        return true;
    }

}