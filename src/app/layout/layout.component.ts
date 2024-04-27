import { Component } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  constructor(private tokenService: TokenService, private router: Router) {}
  logout() {
    this.tokenService.signOut();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
  }
}
