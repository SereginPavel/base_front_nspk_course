import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() totalUsers: number | undefined;
  @Output() namePage: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.namePage.emit('ADD_CONTACT')
  }

  public openPage( namePage: string ) {
    this.namePage.emit(namePage)
  }

}
