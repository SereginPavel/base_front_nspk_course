import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  //@ts-ignore
  private userId: number;
  //@ts-ignore
  public form: FormGroup;
  
  constructor(
    private userService: UsersService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initUserId()
    this.initForm()
  }

  initUserId() {
    this.activatedRoute.params.subscribe(({ id }) => this.userId = +id);
  }

  initForm() {
    this.form = this.fb.group({
      username: ['',  Validators.required],
      phone: ['',  Validators.required],
      email: ['',  Validators.required],
      website: ''
    })
    this.form.patchValue(this.userService.getUser( this.userId ))
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.form.value)
    this.router.navigate(['list-contact'])
  }


  
  public isValid() {
    var elem = document.querySelector('.form-edit_buttons .button_edit')
    if (this.form.valid) {
      elem?.classList.add('enable_baground')
      elem?.classList.remove('disable_baground')
    } else {
      elem?.classList.remove('enable_baground')
      elem?.classList.add('disable_baground')
    }
    return this.form.valid
  }
}
