import { DisplayService } from './../display.service';
import { Component, OnInit } from '@angular/core';

declare var d3: any;


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  employees = [];
  constructor(public employeeService: DisplayService) { }

  ngOnInit() {
    d3.selectAll('svg').remove();


    this.employeeService.getEmployees()
        .subscribe((res) => {
          if (localStorage.getItem('set') == 'access token') {
          this.employees = res;
          console.log(this.employees[0].name); } else { alert('alert');
          }
      });
  }

}
