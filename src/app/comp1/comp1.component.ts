import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../appServices/get-data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {


  text1 = '';
  text2 = '';

  constructor(
    private service: GetDataService,
    private router: Router) { }

  ngOnInit(): void {
  }

  sendData(){
    this.service.data1 = this.text1;
    this.service.data2 = this.text2;
    // console.log(this.service.data1);
    this.router.navigate(['comp2']);
  }

}
