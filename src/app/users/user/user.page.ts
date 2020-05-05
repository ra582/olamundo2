import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';


import { User } from '../../models/users.model';


import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {


  id: string = this.route.snapshot.paramMap.get('id');


  noUser = false;


  data: User;

  constructor(


    private route: ActivatedRoute,


    private usersService: UsersService

  ) { }

  ngOnInit() {




    this.usersService.getUser(this.id).subscribe(

      (res: any) => {
        // console.log(res);


        if (res.status !== 'success') {
          console.error(`Erro: ${res.result}`);
          return false;
        }


        if (res.result === 'No record found') {


          this.noUser = true;
          return false;


        } else {


          this.data = res.result;
          console.log(this.data);

        }
      }
    );
  }


  editUser(id: string) {
    alert(`Editando ${id}...`);
  }


  delUser(id: string, name: string) {
    alert(`Apagando ${name}`);
  }
}
