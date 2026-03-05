import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from '../components/home/home';
import {UserDetail} from '../components/user-detail/user-detail';
import {Setting} from '../components/setting/setting';
import {UserEdit} from '../components/user-edit/user-edit';

const routes: Routes = [
  {path: '', component: Home, title: 'AdminPro - Dashboard'},
  {path: 'user-detail/:id', component: UserDetail, title: 'Detalle de Usuario'},
  { path: 'user-edit/:id', component: UserEdit },
  {path: 'settings', component: Setting, title:'Configuracion'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
