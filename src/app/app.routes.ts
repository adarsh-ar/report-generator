import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { authGaurd } from './auth.gaurds';
import { ReportComponent } from './report/report.component';
import { PromoComponent } from './promo/promo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'promoRequest',
    component: PromoComponent,
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [authGaurd],
    children: [
      {
        path: '',
        redirectTo: 'report',
        pathMatch: 'full',
      },
      {
        path: 'report',
        component: ReportComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
