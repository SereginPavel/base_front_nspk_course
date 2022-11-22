import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {

  @Input() users: any; 

  constructor() { }

  ngOnInit(): void {
  }

}
