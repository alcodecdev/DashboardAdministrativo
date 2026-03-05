import {Component, inject} from '@angular/core';
import {DashboardStats} from '../../interfaces/dashboard-stats';
import {AdminService} from '../../services/admin.service';
import {StatCard} from '../stat-card/stat-card';
import {User} from '../../interfaces/user';
import {RouterLink} from '@angular/router';
import {AsyncPipe, CommonModule} from '@angular/common';
import {BehaviorSubject, combineLatest, map, Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [
    StatCard,
    RouterLink,
    CommonModule,
    AsyncPipe
  ]
})
export class Home {
  private readonly adminService = inject(AdminService);

  // Subjects para capturar lo que el usuario escribe
  private statsSearch$ = new BehaviorSubject<string>('');
  private usersSearch$ = new BehaviorSubject<string>('');

  // Observable de Métricas Filtradas
  filteredStats$: Observable<DashboardStats[]> = combineLatest([
    this.adminService.getDashboardStats(),
    this.statsSearch$
  ]).pipe(
    map(([stats, text]) =>
      stats.filter(s => s.title?.toLowerCase().includes(text.toLowerCase()))
    )
  );

  // Observable de Usuarios Filtrados
  filteredUsers$: Observable<User[]> = combineLatest([
    this.adminService.getAllUsers(),
    this.usersSearch$
  ]).pipe(
    map(([users, text]) =>
      users.filter(u => u.name?.toLowerCase().includes(text.toLowerCase()))
    )
  );

  // Métodos que llaman los inputs del HTML
  filterStats(text: string) {
    this.statsSearch$.next(text);
  }

  filterUsers(text: string) {
    this.usersSearch$.next(text);
  }
}
