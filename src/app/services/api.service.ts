import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myContact } from 'src/model/myContacts';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //dependency injecion
  constructor(private http: HttpClient) {}

  //get functiom for getting all contact details
  getAllContact(): Observable<myContact> {
    return this.http.get('http://localhost:3000/contacts');
  }

  viewContactComponent(contactId: string) {
    return this.http.get(`http://localhost:3000/contacts/${contactId}`);
  }

  getGroupName(groupId: string) {
    return this.http.get(`http://localhost:3000/groups/${groupId}`);
  }

  addContact(contactBody: any) {
    return this.http.post(`http://localhost:3000/contacts`, contactBody);
  }

  getAllGroups() {
    return this.http.get(`http://localhost:3000/groups`);
  }

  deleteContact(contactId: any) {
    return this.http.delete(`http://localhost:3000/contacts/${contactId}`);
  }

  updateContact(contactId: any, contactBody: any) {
    return this.http.put(
      `http://localhost:3000/contacts/${contactId}`,
      contactBody
    );
  }
}
