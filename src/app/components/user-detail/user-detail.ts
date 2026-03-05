import {Component,OnInit, inject} from '@angular/core';
import {AsyncPipe, CommonModule, JsonPipe} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {AdminService} from '../../services/admin.service';
import {User} from '../../interfaces/user';
import {Observable, switchMap} from 'rxjs';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, AsyncPipe, RouterLink],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private adminService = inject(AdminService);

  user$: Observable<User> = this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('id') ?? '';
      return this.adminService.getUserById(id);
    })
  );

  constructor() {}

}
