import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-table',
  templateUrl: './vendor-table.component.html',
  styleUrls: ['./vendor-table.component.css'],
})
export class VendorTableComponent implements OnInit {
  vendors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  headers = [
    'code',
    'name',
    'organization type',
    'classification',
    'header name',
    'request type',
    'request status',
    'vendor status',
  ];
  filterHeaders = ['request type', 'request status', 'vendor status'];

  constructor() {}

  ngOnInit(): void {}
}