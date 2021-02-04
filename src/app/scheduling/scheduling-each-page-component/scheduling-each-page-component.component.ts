import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scheduling-each-page-component',
  templateUrl: './scheduling-each-page-component.component.html',
  styleUrls: ['./scheduling-each-page-component.component.css']
})
export class SchedulingEachPageComponentComponent implements OnInit {

  public otherImageUrl;
  public mainContentTitle;
  public mainContentBaseHour;
  public mainContentBasePrice;
  public descriptionContentServiceDescription;
  public aboutContactInformationEmailDescription;

  constructor(private readonly route: ActivatedRoute) {
    this.route.queryParams
      .subscribe(params => {
        this.otherImageUrl = params["otherImageUrl"]
        this.mainContentTitle = params["mainContentTitle"]
        this.mainContentBaseHour = params["mainContentBaseHour"]
        this.mainContentBasePrice = params["mainContentBasePrice"]
        this.descriptionContentServiceDescription = params["descriptionContentServiceDescription"]
        this.aboutContactInformationEmailDescription = params["aboutContactInformationEmailDescription"]
      })
  }

  ngOnInit(): void {
  }

}
