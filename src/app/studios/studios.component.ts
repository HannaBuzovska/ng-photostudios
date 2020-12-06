import { Component,Input,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Studio } from '../app.component';
import { PopupDialog } from '../popup/popup';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.scss']
})
export class StudiosComponent implements OnInit{
  @Input() studios: Studio[] = [];
  
  constructor() { }

  ngOnInit() {
  }
}