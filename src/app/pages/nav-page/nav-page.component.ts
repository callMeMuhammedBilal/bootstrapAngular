import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RightSidePopupComponent } from 'src/app/shared/component/right-side-popup';

interface INavList {
  name: string;
  link?: string;
  component?: any;
}

@Component({
  selector: 'app-nav-page',
  templateUrl: './nav-page.component.html',
  styleUrls: ['./nav-page.component.css'],
})
export class NavPageComponent implements OnInit {
  navList: INavList[] = [
    {
      name: 'vendor list',
      link: '../vendor-list',
    },
    {
      name: 'side bar popup example',
      component: RightSidePopupComponent,
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onClickGo({ nav }: { nav: INavList }) {
    if (nav.link) this.router.navigate([nav.link], { relativeTo: this.route });
    if (nav.component) this.openPopup({ component: nav.component });
  }

  openPopup({ component }: { component: any }) {
    this.dialog.open(component, {
      panelClass: ['right-side-popup'],
    });
  }
}
