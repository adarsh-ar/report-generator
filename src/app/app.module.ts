import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ReportComponent } from './report/report.component';
import { PromoComponent } from './promo/promo.component';
import { PhoneNoDirectiveDirective } from './directives/phone-no-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    ReportComponent,
    PromoComponent,
    PhoneNoDirectiveDirective,
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
