
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 


import { LoginPageModule } from './login/login.module';
import { HomePageModule } from './home/home.module';
import { ClientDetailsPageModule } from './client-details/client-details.module';
import { WorkoutPlanPageModule } from './workout-plan/workout-plan.module';
import { PrivacyPageModule } from './privacy/privacy.module';


import { ClientService } from './services/client.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    LoginPageModule,
    HomePageModule,
    ClientDetailsPageModule,
    WorkoutPlanPageModule,
    PrivacyPageModule
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
