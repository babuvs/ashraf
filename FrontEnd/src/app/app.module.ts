import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserInfoComponent } from './create-user-info/create-user-info.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { EmpScreenComponent } from './emp-screen/emp-screen.component';
import { EmpXeroxComponent } from './emp-xerox/emp-xerox.component';
import { EmpPassportComponent } from './emp-passport/emp-passport.component';
import { EmpTicketComponent } from './emp-ticket/emp-ticket.component';
import { EmpVisaComponent } from './emp-visa/emp-visa.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { MyTestPageComponent } from './my-test-page/my-test-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserInfoComponent,
    SuperAdminComponent,
    EmpScreenComponent,
    EmpXeroxComponent,
    EmpPassportComponent,
    EmpTicketComponent,
    EmpVisaComponent,
    EmpDetailComponent,
    MyTestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
