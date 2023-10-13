import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { myContact } from 'src/model/myContacts';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css'],
})
export class ContactManagerComponent implements OnInit {
  loginDate: any;

  allContacts: any = [];

  searchKey: any = '';

  constructor(private api: ApiService) {
    this.loginDate = new Date();
  }

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts() {
    this.api.getAllContact().subscribe((data: myContact) => {
      
      console.log(data);

      this.allContacts = data;
    });
  }

  search(event: any) {
    console.log(event.target.value);
    this.searchKey = event.target.value;
  }

  deleteContact(contactId: any) {
    this.api.deleteContact(contactId).subscribe((result: any) => {
      alert('Deleted Successfully');
      this.getAllContacts();
    });
  }
}
