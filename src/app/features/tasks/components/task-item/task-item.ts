import { Component, Input } from '@angular/core';
import { UiCardComponent } from '../../../../shared/ui/card/card';
import { UiBadgeComponent } from '../../../../shared/ui/badge/badge';
import { Task } from '../../models/task';


@Component({
  standalone: true,
  selector: 'app-task-item',
  imports: [UiCardComponent, UiBadgeComponent],
  templateUrl: './task-item.html',
  styleUrls: ['./task-item.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;

  variantFrom(p: Task['priority']) {
    if (p === 'haute') return 'danger';
    if (p === 'moyenne') return 'warning';
    return 'neutral';
  }
}
