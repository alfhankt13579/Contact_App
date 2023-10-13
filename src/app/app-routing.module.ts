import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'contactManager', pathMatch: 'full' },
  { path: 'contactManager', component: ContactManagerComponent },
  { path: 'contactManager/addContact', component: AddContactComponent },
  { path: 'contactManager/view/:Id', component: ViewContactComponent },
  { path: 'contactManager/edit/:Id', component: EditContactComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
