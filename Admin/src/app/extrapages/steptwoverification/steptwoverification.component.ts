import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steptwoverification',
  templateUrl: './steptwoverification.component.html',
  styleUrls: ['./steptwoverification.component.scss']
})
export class SteptwoverificationComponent implements OnInit {

  constructor() { }
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '80px',
      'height': '50px'
    }
  };
  ngOnInit(): void {
    document.body.classList.remove('auth-body-bg')
  }
 // set the currenr year
 year: number = new Date().getFullYear();
}
