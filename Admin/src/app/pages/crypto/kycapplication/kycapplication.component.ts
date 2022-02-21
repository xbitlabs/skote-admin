import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kycapplication',
  templateUrl: './kycapplication.component.html',
  styleUrls: ['./kycapplication.component.scss']
})
export class KycapplicationComponent implements OnInit {
  // breadcrumb items
  breadCrumbItems: Array<{}>;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Crypto' }, { label: 'KYC Application', active: true }];
  }

  /**
   * Open modal
   * @param content modal content
   */
  verificationModal(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

}
