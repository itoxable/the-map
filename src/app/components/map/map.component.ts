import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testx() {
    console.log('It works!!');
  }

}
