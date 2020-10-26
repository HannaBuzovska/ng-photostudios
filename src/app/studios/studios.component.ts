import { Component, Input, OnInit } from '@angular/core';
import { link } from 'fs';
import { Studio } from '../app.component';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.scss']
})
export class StudiosComponent implements OnInit{

  @Input() studios: Studio[] = []
  selectedStudio:  Studio

  constructor() { }

  ngOnInit() {
  }
  onSelect(studio: Studio): void {
    this.selectedStudio = studio;
  }
}