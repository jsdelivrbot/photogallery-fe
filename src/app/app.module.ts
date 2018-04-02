import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule}   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {MatInputModule, MatFormFieldControl} from '@angular/material';
import { AppComponent } from './app.component';
import { MainComponent,  } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignInFormComponent } from './login/sign-in/sign-in-form/sign-in-form.component';
import { PersonalInfoComponent } from './login/sign-up/personal-info/personal-info.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SignUpComponent,
    SignInComponent,
    SignInFormComponent,
    PersonalInfoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatInputModule,
    
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
