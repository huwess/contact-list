import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact';

@Injectable({ providedIn: 'root' })
export class ContactListService {
  private apiUrl = 'http://localhost:3000/contacts';
  private lastSelectedContact: Contact | null = null;
  setLastSelectedContact(contact: Contact) {
    this.lastSelectedContact = contact;
  }

  getLastSelectedContact(): Contact | null {
    return this.lastSelectedContact;
  }

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  getContactById(id: string): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}/${id}`);
  }

  // Add more methods for add, update, delete as needed
}
