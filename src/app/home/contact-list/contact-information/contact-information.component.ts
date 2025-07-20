import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ContactListService } from '../contact-list.service';
import { Contact } from '../../../models/contact';

@Component({
  selector: 'app-contact-information',
  imports: [MatIconModule],
  templateUrl: './contact-information.component.html',
  styleUrl: './contact-information.component.scss'
})
export class ContactInformationComponent implements OnInit, OnDestroy {
  contact: Contact | null = null;
  private sub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private contactService: ContactListService
  ) {}

  ngOnInit() {
    // Listen for route changes and update contact info accordingly
    this.sub.add(
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        // 1. Try shared service
        const serviceContact = this.contactService.getLastSelectedContact();
        if (serviceContact && serviceContact.id === id) {
          this.contact = serviceContact;
          return;
        }
        // 2. Try router state
        const nav = this.router.getCurrentNavigation();
        const stateContact = nav?.extras?.state?.['contact'];
        if (stateContact && stateContact.id === id) {
          this.contact = stateContact;
          this.contactService.setLastSelectedContact(stateContact);
          return;
        }
        // 3. Fallback: fetch from backend
        if (id) {
          this.http.get<Contact>(`http://localhost:3000/contacts/${id}`).subscribe(data => {
            this.contact = data;
            this.contactService.setLastSelectedContact(data);
          });
        }
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
