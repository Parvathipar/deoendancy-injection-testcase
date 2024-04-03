import { Component} from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
 employeedata:any[]=[]
 constructor(private empservice:TestServiceService ){}
 ngOnInit():void{
  this.employeedata=this.empservice?.getemployeedetails();
 }
}
