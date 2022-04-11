import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-right-sidebar',
  templateUrl: './front-right-sidebar.component.html',
  styleUrls: ['./front-right-sidebar.component.scss'],
})
export class FrontRightSidebarComponent implements OnInit {
  selected: Date | null = null;
  
  constructor() {}
  ngOnInit(): void {}
}
