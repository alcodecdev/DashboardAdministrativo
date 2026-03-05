import {Component, inject} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../../services/admin.service';
import {User} from '../../interfaces/user';
import {Observable, switchMap, take} from 'rxjs';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, AsyncPipe],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css',
})
export class UserEdit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private adminService = inject(AdminService);

  user$: Observable<User> = this.route.paramMap.pipe(
    switchMap(params => this.adminService.getUserById(params.get('id') ?? ''))
  );

  save(user: User) {
    this.adminService.updateUser(user).pipe(take(1)).subscribe({
      next: () => {
        this.router.navigate(['/user-detail', user.id]);
      },
      error: (err) => console.error('Error al actualizar:', err)
    });
  }

  cancel(id: string | number) {
    this.router.navigate(['/user-detail', id]);
  }

}
