import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

import {IonInfiniteScroll} from '@ionic/angular';



@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.page.html',
  styleUrls: ['./listusers.page.scss'],
})
export class ListusersPage implements OnInit {


itemsPage: any[];
private readonly offset: number = 10;
private index = 0;

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
} else {
  this.itemsPage = this.data.slice(this.index, this.offset + this.index);
  this.index += this.offset;
}

  } else{
 console.error('Falha no acesso á API');
  }

});

  }
loadData(event) {

  setTimeout(() =>  {

    const news = this.data.slice(this.index, this.offset + this.index);
    this.index += this.offset;

    for( let i=0; i< news.length; i++) {
      this.itemsPage.push(news[i]);

      
    }
    event.target.complete();

    if (this.itemsPage.length === this.data.length) {
      event.target.disable = true;
    }
  }, 800);
}
}
