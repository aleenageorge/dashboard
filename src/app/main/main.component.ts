import { DisplayService } from './../display.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var d3: any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  empdetails;
  constructor(public router: Router, service: DisplayService) {
    this.empdetails = service.getDisplay();
   }

  ngOnInit() {
    d3.selectAll('svg').remove();

  }

}
