import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private route: Router, private UserService: UserService) { }
  public userEmail: string = undefined;
  public userPassword: string = undefined;

  ngOnInit() {
  }

  onSubmit(){
    const data = {
      userEmail: this.userEmail,
      userPassword: this.userPassword
    }

    this.UserService.userLogin(data).subscribe((res: any) => {
      this.route.navigate(['/regiao']);
    })
  }
}
