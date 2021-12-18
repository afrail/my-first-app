import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ListofuserComponent } from './listofuser/listofuser.component';

const routes: Routes = [

  {path: '', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userlist', component: ListofuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
