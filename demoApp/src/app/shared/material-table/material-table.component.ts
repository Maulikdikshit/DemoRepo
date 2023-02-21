import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {

  @Input() dataSource: any;
  @Input() displayedColumns: any;

  constructor() { }

  ngOnInit(): void {
  }

  onRowClick(){
    console.log("row was clicked");
  }

}
