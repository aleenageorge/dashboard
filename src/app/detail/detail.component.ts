import { DisplayService } from './../display.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var d3: any;

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  empdetails;
  constructor(public router: Router, service: DisplayService) {
    this.empdetails = service.getDisplay();
   }

  ngOnInit() {
    d3.selectAll('svg').remove();

  }

}
