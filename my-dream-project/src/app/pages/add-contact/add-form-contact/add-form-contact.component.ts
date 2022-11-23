import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-form-contact',
  templateUrl: './add-form-contact.component.html',
  styleUrls: ['./add-form-contact.component.scss']
})
export class AddFormContactComponent implements OnInit {

  //@ts-ignore
  public form: FormGroup;

  constructor(
    private userService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.form.valueChanges.subscribe()
  }


  initForm() {
    this.form = this.fb.group({
      username: ['',  Validators.required],
      phone: ['',  Validators.required],
      email: ['',  Validators.required],
      website: ''
    })
  }

  addContact() {
    this.userService.addUser(this.form.value)
    this.router.navigate(['list-contact'])
    console.log(this.form.valid)
  }

  public isValid() {
    var elem = document.querySelector('.form_buttons .button_save')
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
