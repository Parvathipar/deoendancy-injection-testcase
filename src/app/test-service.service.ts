import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  employeedata:any[]=[
   {name:"Sachin",id:"E1101",designation:"Full-Stack-Devoloper",age:"24",place:"Kasargode"},
   {name:"Ashok",id:"E1102",designation:"Front-End-Devoloper",age:"26",place:"Kollam"},
   {name:"Narmadhaa",id:"E1103",designation:"Angular-devoloper",age:"25",place:"Ernakulam"},
   {name:"Sara",id:"E1104",designation:"React-Devoloper",age:"25",place:"Kozikkode"},
   {name:"Parvathi",id:"E1105",designation:"Full-Stack-Devoloper",age:"26",place:"Kottayam"},
   {name:"Sandeep",id:"E1106",designation:"Back-end Devoloper",age:"25",place:"Coimbatore"},
  ]
  constructor() { }
  getemployeedetails():any[]{
    return this.employeedata
  }
}
