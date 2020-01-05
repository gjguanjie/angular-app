import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  { 
    path: 'index', 
    component: LayoutComponent,
    children: [
      { 
        path: 'user', 
        component: UserComponent 
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutes {}
