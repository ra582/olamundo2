import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';



@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.page.html',
  styleUrls: ['./listusers.page.scss'],
})
export class ListusersPage implements OnInit {

noUsers = false;

data: Array<any> = [];


  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

this.usersService.getUsers().subscribe((res: any) => {


  if(res.status === 'sucess') {

res.result.forEach((value) =>{

if(value !== null) {
  this.data.push(value);
}

});

if(this.data.length === 0){
this.noUsers = true;
}

  } else{
 console.error('Falha no acesso á API');
  }

});

  }

}
