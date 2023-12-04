import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private  loginService: LoginService) { }
  
  @Input()
  email: string = "";
  @Input()
  password: string = "";


  loginUser():void{
    if(this.email && this.password){
      this.loginService.login(this.email, this.password).subscribe(()=>{
        alert("Logado com sucesso");
      }, (error)=>{
        alert("Erro ao efetuar login")
      })
    }
     
  }

}
