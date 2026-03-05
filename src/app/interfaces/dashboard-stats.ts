export interface DashboardStats {
  id: number;
  title: string,
  value: string | number;
  icon: string,
  trend: 'up' | 'down';
  percentage: number;
}
