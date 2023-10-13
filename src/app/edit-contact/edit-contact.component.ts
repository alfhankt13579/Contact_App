import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { myContact } from 'src/model/myContacts';
import { myGroup } from 'src/model/myGroups';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  contact: myContact = {};
  contactId: string = '';
  groups: myGroup[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data);
      console.log(data.Id);
      this.contactId = data.Id;

      this.api.viewContactComponent(this.contactId).subscribe((result: any) => {
        console.log(result);
        this.contact = result;

        this.api.getAllGroups().subscribe((data: any) => {
          console.log(data);
          this.groups = data;
        });
      });
    });
  }

  updateContact() {
    this.api
      .updateContact(this.contactId, this.contact)
      .subscribe((result: any) => {
        console.log(result);
        this.router.navigateByUrl('')
      });
  }
}
