import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideSweetAlert2 } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './guard/app-routing-module';
import { App } from './app';
import { StatCard } from './components/stat-card/stat-card';
import { Home } from './components/home/home';
import { UserDetail } from './components/user-detail/user-detail';
import { Setting } from './components/setting/setting';
import { UserEdit } from './components/user-edit/user-edit';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, StatCard, Home, UserDetail, AppRoutingModule, Setting, UserEdit],
  providers: [provideBrowserGlobalErrorListeners(), provideSweetAlert2()],
  bootstrap: [App],
})
export class AppModule {}
