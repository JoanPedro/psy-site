import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home-card-component',
  templateUrl: './home-card-component.component.html',
  styleUrls: ['./home-card-component.component.css']
})
export class HomeCardComponentComponent implements OnInit {

  @Input() title = '';
  @Input() imageUrl = '';
  @Input() hour = '';
  @Input() price = '';

  @Input() detailUrl = 'agenda';

  @Input() otherImageUrl = '';
  @Input() mainContentTitle = '';
  @Input() mainContentBaseHour = '';
  @Input() mainContentBasePrice = '';
  @Input() descriptionContentServiceDescription = '';
  @Input() aboutContactInformationEmailDescription = '';

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  public onClick: () => void = () => {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        otherImageUrl: this.otherImageUrl,
        mainContentTitle: this.mainContentTitle,
        mainContentBaseHour: this.mainContentBaseHour,
        mainContentBasePrice: this.mainContentBasePrice,
        descriptionContentServiceDescription: this.descriptionContentServiceDescription,
        aboutContactInformationEmailDescription: this.aboutContactInformationEmailDescription
      }
    };

    this.router.navigate([this.detailUrl], navigationExtras);
  }

}
