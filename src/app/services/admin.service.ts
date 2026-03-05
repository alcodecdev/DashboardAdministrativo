import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardStats } from '../interfaces/dashboard-stats';
import {User} from '../interfaces/user';
import {environment} from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.apiUrl;


  getDashboardStats(): Observable<DashboardStats[]> {
    return this.http.get<DashboardStats[]>(`${this.url}/stats`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`);
  }

  getUserById(id: string | number): Observable<User> {
    return this.http.get<User>(`${this.url}/users/${id}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/users/${user.id}`, user);
  }

}
