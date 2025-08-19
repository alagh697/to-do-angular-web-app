import { Component } from '@angular/core';
import { TaskItemComponent } from './components/task-item/task-item';
import { Task } from './models/task';

type Filter = 'all' | 'haute' | 'moyenne' | 'basse';

@Component({
  standalone: true,
  selector: 'app-tasks-page',
  imports: [TaskItemComponent],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css'],
})
export class TasksPage {
  // Pas de service / signal : données locales pour l'exo
  tasks: Task[] = [
    { title: 'Préparer le cours',     priority: 'haute',   done: false },
    { title: 'Relire les notes',      priority: 'moyenne', done: true  },
    { title: 'Mettre à jour Angular', priority: 'basse',   done: false },
    { title: 'Écrire tests',          priority: 'haute',   done: false },
    { title: 'Nettoyer styles',       priority: 'moyenne', done: false },
  ];

  // taches términées
  get completedTasks(): number {
    return this.tasks.filter(t => t.done).length;
  }

  // Filtre courant
  filter: Filter = 'all';

  setFilter(f: Filter) { this.filter = f; }

  // Liste filtrée pour l’affichage (Bonus 3)
  get filteredTasks(): Task[] {
    if (this.filter === 'all') return this.tasks;
    return this.tasks.filter(t => t.priority === this.filter);
  }
}
