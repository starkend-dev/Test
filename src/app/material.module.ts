import { NgModule } from '@angular/core';
import {
    MatCardModule, 
    MatDividerModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatMenuModule,
    MatSidenavModule 
    
} from '@angular/material';



@NgModule({
    imports: [
        MatCardModule, 
        MatDividerModule, 
        MatButtonModule, 
        MatToolbarModule, 
        MatIconModule, 
        MatMenuModule, 
        MatSidenavModule  
    ],
    exports: [
    MatCardModule, 
    MatDividerModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatMenuModule, 
    MatSidenavModule    
    ],
})
export class MaterialModule {}
