import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private  loginService: LoginService, private router: Router) { }
  
  @Input()
  email: string = "";
  @Input()
  password: string = "";


  loginUser():void{
    if(this.email && this.password){
      this.loginService.login(this.email, this.password).subscribe(()=>{
        alert("Logado com sucesso");
        this.router.navigate(['/']);
      }, (error)=>{
        alert("Erro ao efetuar login")
      })
    }
     
  }

}
