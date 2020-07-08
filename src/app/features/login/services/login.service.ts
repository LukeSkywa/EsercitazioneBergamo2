import { AuthService } from './../../../core/services/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModule } from '../login.module';
import { User } from 'src/app/core/model/user.interface';

@Injectable()
export class LoginService {

  constructor(private router: Router, private authService: AuthService) { }

  executeLogin(username: string) {
    this.authService.doLogin(username).subscribe((users: User[]) => {
      if (users && users.length > 0) {
        sessionStorage.setItem("user", username);
        this.router.navigateByUrl("/home");
      }else{
        alert("Login errata");
      }
    }, ()=>{
      alert("Login in errore");
    });

  }
}
