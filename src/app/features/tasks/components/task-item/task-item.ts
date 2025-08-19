import { Component, Input } from '@angular/core';
import { UiCardComponent } from '../../../../shared/ui/card/card';
import { UiBadgeComponent } from '../../../../shared/ui/badge/badge';
import { Task } from '../../models/task';
import { FormatDatePipe } from '../../../../shared/pipes/format-date-pipe';


@Component({
  standalone: true,
  selector: 'app-task-item',
  imports: [UiCardComponent, UiBadgeComponent, FormatDatePipe],
  templateUrl: './task-item.html',
  styleUrls: ['./task-item.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;

  fixedDate = new Date(2024, 0, 15); // 15 janvier 2024

  variantFrom(p: Task['priority']) {
    if (p === 'haute') return 'danger';
    if (p === 'moyenne') return 'warning';
    return 'neutral';
  }
}
