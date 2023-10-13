import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css'],
})
export class ViewContactComponent implements OnInit {
  contactId: any = '';

  contact: any = [];

  groupId: string = '';

  groupName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,

    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data);

      console.log(data.Id);

      this.contactId = data.Id;

      this.api.viewContactComponent(this.contactId).subscribe((result: any) => {
        console.log(result);

        this.contact = result;

        this.groupId = result.groupid;

        console.log(this.groupId);

        this.api.getGroupName(this.groupId).subscribe((data: any) => {
          console.log(data);

          this.groupName = data.name;

          console.log(this.groupName);
        });
      });
    });
  }
}
