import { Component, OnInit } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

import { tasks } from './data';

import { Task } from './kanabn.model';

@Component({
  selector: 'app-kanbanboard',
  templateUrl: './kanbanboard.component.html',
  styleUrls: ['./kanbanboard.component.scss']
})

/**
 * Kanbanboard Component
 */
export class KanbanboardComponent implements OnInit {

  upcomingTasks: Task[];
  inprogressTasks: Task[];
  completedTasks: Task[];

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Tasks' }, { label: 'Kanban Board', active: true }];


    this._fetchData();
  }

  /**
   * on dragging task
   * @param item item dragged
   * @param list list from item dragged
   */
  onDragged(item: any, list: any[]) {
    const index = list.indexOf(item);
    list.splice(index, 1);
  }

  /**
   * On task drop event
   */
  onDrop(event: DndDropEvent, filteredList?: any[], targetStatus?: string) {
    if (filteredList && event.dropEffect === 'move') {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = filteredList.length;
      }

      filteredList.splice(index, 0, event.data);
    }
  }

  private _fetchData() {
    // all tasks
    this.inprogressTasks = tasks.filter(t => t.status === 'inprogress');
    this.upcomingTasks = tasks.filter(t => t.status === 'upcoming');
    this.completedTasks = tasks.filter(t => t.status === 'completed');
  }
}
