import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  public total: number | undefined;

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    setInterval( () => { this.total = this.userService.getUsers().length }, 1000)
  }

}
