import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


import { ContactListCardComponent } from './contact-list/contact-list-card/contact-list-card.component';
import { ContactListTableComponent } from './contact-list/contact-list-table/contact-list-table.component';
import { FormModalComponent } from "../modal/form-modal/form-modal.component";
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  imports: [CommonModule, MatButtonModule, MatIconModule, ContactListCardComponent, ContactListTableComponent, FormModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentView: 'grid' | 'table' = 'grid';
  readonly dialog = inject(MatDialog);

  setView(view: 'grid' | 'table') {
    this.currentView = view;
  }

 

  openDialog() {
    this.dialog.open(FormModalComponent);
  }
}
