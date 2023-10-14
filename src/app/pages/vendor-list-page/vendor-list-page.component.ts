import { Component, OnInit } from '@angular/core';
import { tableHeader } from '../../shared/common';

@Component({
  selector: 'app-vendor-list-page',
  templateUrl: './vendor-list-page.component.html',
  styleUrls: ['./vendor-list-page.component.css'],
})
export class VendorListPageComponent implements OnInit {
  cards = [
    {
      label: 'total vendors',
      count: 7531,
    },
    {
      label: 'pending headers',
      count: 42,
    },
    {
      label: 'total suppliers',
      count: 72,
    },
    {
      label: 'onboarding',
      count: 17,
    },
    {
      label: 'modification draft',
      count: 42,
    },
    {
      label: 'new vendors',
      count: 285,
      increment: 6,
    },
  ];
  pages = [1, 2, 3, 4, 5];
  activePage = this.pages[0];
  displayHeader = [
    tableHeader.code,
    tableHeader.name,
    // tableHeader.organizationType,
    tableHeader.classification,
    tableHeader.headerName,
    tableHeader.requestType,
    // tableHeader.requestStatus,
    tableHeader.vendorStatus,
  ];

  constructor() {}

  ngOnInit(): void {}
}
