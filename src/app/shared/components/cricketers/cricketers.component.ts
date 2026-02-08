import { Component, OnInit } from '@angular/core';
import { Icricketers } from '../../const/interfaces';
import { CRICKETERS } from '../../model/cricketers';

@Component({
  selector: 'app-cricketers',
  templateUrl: './cricketers.component.html',
  styleUrls: ['./cricketers.component.scss']
})
export class CricketersComponent implements OnInit {

  searchtext:string = ''
  cricketersarr:Icricketers[] = CRICKETERS
  constructor() { }

  ngOnInit(): void {

    
  }



}
