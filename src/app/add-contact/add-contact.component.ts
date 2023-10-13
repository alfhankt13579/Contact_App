import { Component, OnInit } from '@angular/core';
import { myContact } from 'src/model/myContacts';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  allGroups: any = [];
  // contactName: string='';
  contact: myContact = {};

  constructor(private api: ApiService, private router: Router) {
    this.contact.groupid = 'Select a group';
  }

  ngOnInit(): void {
    this.api.getAllGroups().subscribe((data: any) => {
      console.log(data);
      this.allGroups = data;
    });
  }

  addContact() {
    this.api.addContact(this.contact).subscribe((result: any) => {
      this.router.navigateByUrl('');
    });
  }
}
