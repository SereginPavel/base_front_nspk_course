import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {

  //@ts-ignore
  users: any[] = this.userService.getUsers();

  constructor(private userService: UsersService,
              private router: Router) { 

  }

  ngOnInit(): void {
  }

  public deleteContact(id: number) {
    this.userService.deleteUser(id)
    this.users = this.userService.getUsers();
  }
}
