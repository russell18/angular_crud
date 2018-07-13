import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule} from '@angular/forms'; 
import { EmployeeService } from './shared/employee.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
      
  ],
  imports: [
    BrowserModule,
    FormsModule     
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
