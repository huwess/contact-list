import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { provideHttpClient } from '@angular/common/http';
import { ContactListCardComponent } from './contact-list/contact-list-card/contact-list-card.component';
import { ContactListTableComponent } from './contact-list/contact-list-table/contact-list-table.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule, MatButtonModule, MatIconModule, ContactListCardComponent, ContactListTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentView: 'grid' | 'table' = 'grid';

  setView(view: 'grid' | 'table') {
    this.currentView = view;
  }
}
