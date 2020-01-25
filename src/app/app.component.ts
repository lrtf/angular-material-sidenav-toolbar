import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-sidenav-toolbar';

  opened = true;
  contentMargin = 260;
  selected = 'Dashboard';
  navListItens = [
    { item: 'Dashboard', link: '/', icon: 'dashboard' },
    { item: 'Prova', link: '/', icon: 'timer' },
    { item: 'Categoria', link: '/', icon: 'list' },
    { item: 'Atleta', link: '/', icon: 'directions_run' },
  ];

  handleClick(item) {
    this.selected = item.item;
  }

  toggle() {
    this.opened = !this.opened;
    if (!this.opened) {
      this.contentMargin = 60;
    } else {
      this.contentMargin = 260;
    }
  }

}
