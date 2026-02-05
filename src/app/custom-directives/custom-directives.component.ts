import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.scss']
})
export class CustomDirectivesComponent implements OnInit {

  name:string = 'Rahul'

  age:string = '16'

  instock!:boolean
  constructor() { }

  ngOnInit(): void {

    this.instock = Math.random() > 0.5? false : true
  }
}
