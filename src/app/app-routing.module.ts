import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavPageComponent, VendorListPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-list',
    pathMatch: 'full',
  },
  {
    path: 'page-list',
    component: NavPageComponent,
  },
  {
    path: 'vendor-list',
    component: VendorListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
