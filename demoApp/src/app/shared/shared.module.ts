import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MaterialTableComponent } from './material-table/material-table.component';



@NgModule({
    imports:[
        MatTableModule,
        CommonModule
    ],
    declarations:[
    MaterialTableComponent
  ],
    exports:[MatTableModule,MaterialTableComponent]
})
export class SharedModule{}