import { Component, OnInit } from '@angular/core';

import { Project } from '../project.model';

import { projectData } from '../projectdata';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss']
})

/**
 * Projects-list component
 */
export class ProjectlistComponent implements OnInit {

 // bread crumb items
 breadCrumbItems: Array<{}>;

 projectData: Project[];

 constructor() { }

 ngOnInit() {
   this.breadCrumbItems = [{ label: 'Projects' }, { label: 'Projects List', active: true }];

   this.projectData = projectData;
 }
}
