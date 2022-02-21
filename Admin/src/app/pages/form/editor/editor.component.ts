import { Component, OnInit } from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

/**
 * Form-editor component
 */
export class EditorComponent implements OnInit {

 // bread crumb items
 breadCrumbItems: Array<{}>;

 public Editor = ClassicEditor;

 constructor() { }

 ngOnInit() {
   this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Editor', active: true }];
 }
}
