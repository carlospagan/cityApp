import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  public userName: string = undefined;
  public userEmail: string = undefined;
  public userPassword: string = undefined;
  public userUf: string = undefined;
  public userCity: string = undefined;

  onSubmit(){
    const data = {
      userName: this.userName,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
      userUf: this.userUf,
      userCity: this.userCity

    }

    this.UserService.userRegister(data).subscribe((res) => {
      this.router.navigate(['/login']);
    })
  }

  ngOnInit() {
  }

  goToLoginPage(){
    this.router.navigate(['/login']);
  }
}
