import {Component, Input} from '@angular/core';
import {DashboardStats} from '../../interfaces/dashboard-stats';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css',
  imports: [
    NgClass
  ]
})
export class StatCard {
  @Input() stat!: DashboardStats;
}
