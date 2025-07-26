import { Component, signal } from '@angular/core';
import { Logo } from './logo/logo';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [Logo, RouterOutlet],
  template: `<main>
    <header class="header">
      <app-logo />
    </header>
    <section class="content">
      <router-outlet> </router-outlet>
    </section>
  </main>`,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('first-angular-app');
}
