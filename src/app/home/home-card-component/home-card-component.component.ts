import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
