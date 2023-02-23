import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {

  @Input() dataSource: any;
  @Input() displayedColumns: any;
  @Output() rowData = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onRowClick(row:any){
    console.log("row was clicked",row);
    this.rowData.emit(row);
  }

}
