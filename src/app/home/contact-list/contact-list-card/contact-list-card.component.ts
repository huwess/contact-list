import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContactListService } from '../contact-list.service';
import { OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Contact } from '../../../models/contact';

@Component({
  selector: 'app-contact-list-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './contact-list-card.component.html',
  styleUrl: './contact-list-card.component.scss'
})
export class ContactListCardComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactListService, private router: Router) {}
  goToContactInfo(contact: Contact) {
    console.log('Navigating to contact info for:', contact.name);
    this.contactService.setLastSelectedContact(contact);
    this.router.navigate(['/home/contact-info', contact.id], { state: { contact } });
  }
  ngOnInit() {
    this.contactService.getContacts().subscribe((data: Contact[]) => {
      this.contacts = data;
    });
  }

  
}
