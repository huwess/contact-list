import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContactListService } from '../contact-list.service';
import { OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-contact-list-table',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './contact-list-table.component.html',
  styleUrl: './contact-list-table.component.scss'
})
export class ContactListTableComponent implements OnInit {
  contacts: any[] = [];

  constructor(private contactService: ContactListService, private router: Router) {}

  ngOnInit() {
    this.contactService.getContacts().subscribe((data: any[]) => {
      this.contacts = data;
    });
  }
  goToContactInfo(contact: any) {
    this.contactService.setLastSelectedContact(contact);
    this.router.navigate(['/home/contact-info', contact.id], { state: { contact } });
  }
}
