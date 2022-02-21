import { Component, OnInit } from '@angular/core';

import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.scss']
})

/**
 * Form repeater component
 */
export class RepeaterComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  form: FormGroup;
  phoneData: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      formlist: this.fb.array([]),
    }),

    this.phoneData = this.fb.group({
      phoneValue: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Repeater', active: true }];
  }

  formData(): FormArray {
    return this.form.get('formlist') as FormArray;
  }

  phonedata(): FormArray {
    return this.phoneData.get('phoneValue') as FormArray;
  }

  phone(): FormGroup {
    return this.fb.group({
      phonenumber: ''
    });
  }

  field(): FormGroup {
    return this.fb.group({
      name: '',
      email: '',
      subject: '',
      file: '',
      msg: '',
    });
  }

  /**
   * Add phone field in list
   */
  addPhone() {
    this.phonedata().push(this.phone());
  }

  /**
   * Remove field from form
   * @param i specified index to remove
   */
  removeField(i: number) {
    if (confirm('Are you sure you want to delete this element?')) {
      this.formData().removeAt(i);
    }
  }

  /**
   * Delete phone field from list
   * @param i specified index
   */
  deletePhone(i: number) {
    this.phonedata().removeAt(i);
  }

  /**
   * Add field in form
   */
  addField() {
    this.formData().push(this.field());
  }
}
