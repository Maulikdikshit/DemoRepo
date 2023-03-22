import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MaterialTableComponent } from './material-table/material-table.component';
import { InputComponentComponent } from './input-component/input-component.component';



@NgModule({
    imports:[
        MatTableModule,
        CommonModule
    ],
    declarations:[
    MaterialTableComponent,
    InputComponentComponent
  ],
    exports:[MatTableModule,MaterialTableComponent,InputComponentComponent]
})
export class SharedModule{}