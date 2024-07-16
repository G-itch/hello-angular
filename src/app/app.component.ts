import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { Button, ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import {BadgeModule} from 'primeng/badge';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenubarModule,ButtonModule,AvatarModule,BadgeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-angular';
}
