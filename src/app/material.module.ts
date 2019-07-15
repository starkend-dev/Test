import { NgModule } from '@angular/core';
import {MatCardModule, MatDividerModule, MatButtonModule } from '@angular/material';
// import {MatButtonModule} from '@angular/material/button';
//  import { MatDividerModule } from '@angular/material/divider';


@NgModule({
    imports: [
        MatCardModule, 
        MatDividerModule,
        MatButtonModule
    ],
    exports: [
        MatCardModule, 
        MatDividerModule,
        MatButtonModule 
    ],
})
export class MaterialModule {}
