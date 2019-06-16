import { DisplayService } from './../display.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  employees = [];
  constructor(public employeeService: DisplayService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
        .subscribe((res)=>{
          this.employees = res;
          console.log(this.employees[0].name);
      });
  }

}
