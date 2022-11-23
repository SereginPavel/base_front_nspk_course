import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { AddFormContactComponent } from './pages/add-contact/add-form-contact/add-form-contact.component';
import { EditContactComponent } from './pages/list-contact/edit-contact/edit-contact.component';
import { ListContactComponent } from './pages/list-contact/list-contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'add-contact', pathMatch: 'full'},
  { path: 'add-contact', component: AddContactComponent},
  { path: 'add-contact/add-form-contact', component: AddFormContactComponent},
  { path: 'list-contact', component: ListContactComponent},
  { path: 'list-contact/edit-contact/:id', component: EditContactComponent},
  { path: '**', component: ListContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
