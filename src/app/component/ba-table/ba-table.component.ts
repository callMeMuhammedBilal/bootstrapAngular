import { Component, Input, OnInit } from '@angular/core';
import { tableHeader } from 'src/app/shared/common';

@Component({
  selector: 'app-ba-table',
  templateUrl: './ba-table.component.html',
  styleUrls: ['./ba-table.component.css'],
})
export class BootstrapTableComponent implements OnInit {
  @Input()
  displayHeader = [];

  @Input()
  displayData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  filterHeaders = [
    tableHeader.requestType,
    tableHeader.requestStatus,
    tableHeader.vendorStatus,
  ];
  allHeader = [
    { key: tableHeader.code, label: 'code' },
    { key: tableHeader.name, label: 'name' },
    { key: tableHeader.organizationType, label: 'Organization Type' },
    { key: tableHeader.classification, label: 'classification' },
    { key: tableHeader.headerName, label: 'header name' },
    { key: tableHeader.requestType, label: 'request type' },
    { key: tableHeader.requestStatus, label: 'request status' },
    { key: tableHeader.vendorStatus, label: 'vendor status' },
  ];
  allKeys = tableHeader;

  constructor() {}

  ngOnInit(): void {}
}
