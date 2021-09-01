import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../appServices/get-data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  input1 = '';
  input2 = '';
  constructor(private service: GetDataService) { }

  ngOnInit(): void {
    this.input1 = this.service.data1;
    this.input2 = this.service.data2;
  }

}
