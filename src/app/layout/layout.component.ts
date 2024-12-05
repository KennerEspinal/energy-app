import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/ui/navbar/navbar.component';
import { FooterComponent } from '../shared/ui/footer/footer.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />
    <router-outlet />
    <app-footer />
  `,
})
export default class LayoutComponent {}
