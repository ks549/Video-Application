import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-component',
  templateUrl: './views-component.component.html',
  styleUrls: ['./views-component.component.css']
})
export class ViewsComponentComponent implements OnInit {

  title="AngularJS tutorial";
  views="100";
  constructor() { }

  ngOnInit() {
  }

}
